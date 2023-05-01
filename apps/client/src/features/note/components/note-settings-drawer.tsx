import { FC, ReactElement, cloneElement } from 'react';
import { Drawer, Button } from '@nifty/ui/atoms';
import { useDisclosure } from '@/hooks/use-disclosure';
import {
  useUpdateNote,
  NotePermissionDropdown,
  useGetNote,
} from '@/features/note';
import { Permission } from '@nifty/api/util/handle-permissions';

type NoteSettingsDrawerProps = {
  triggerButton: ReactElement;
  noteId: string;
};

// consider moving to formkik if this become CRUD operations
export const NoteSettingsDrawer: FC<NoteSettingsDrawerProps> = ({
  triggerButton,
  noteId,
}) => {
  const { close, open, isOpen } = useDisclosure();
  const { mutateAsync: updateNote } = useUpdateNote(noteId);
  const { data: note, isFetched } = useGetNote(noteId);

  if (!note)
    return (
      <div role="status" className="h-[88px] w-[70ch]">
        <div className="flex h-full animate-pulse flex-col gap-[8px]">
          <div className="h-[32px] w-2/3 rounded bg-zinc-100 dark:bg-zinc-800" />
          <div className="h-[48px] w-full rounded bg-zinc-100 dark:bg-zinc-800" />
        </div>
      </div>
    );

  const updateNotePermissions = async (permission: Permission) => {
    await updateNote({
      public_permissions: permission,
    });
  };

  return (
    <>
      {cloneElement(triggerButton, { onClick: open })}
      <Drawer
        isOpen={isOpen}
        onClose={close}
        title={'Note Settings'}
        size={'lg'}
        renderFooter={() => (
          <>
            <Button variant="secondary" onClick={close}>
              Cancel
            </Button>
          </>
        )}
      >
        Note settings
        {/* Update note permissions dropdown */}
        {isFetched && (
          <NotePermissionDropdown
            initPermissions={note.data.public_permissions}
            onChange={updateNotePermissions}
          />
        )}
      </Drawer>
    </>
  );
};
