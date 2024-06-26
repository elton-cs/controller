import { Button } from "@chakra-ui/react";
import { Container, Footer } from "components/layout";
import { LogoutDuoIcon } from "@cartridge/ui";

export function Logout({
  onConfirm,
  onCancel,
}: {
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <Container Icon={LogoutDuoIcon} title="Log Out" description="Are you sure?">
      <Footer>
        <Button colorScheme="colorful" onClick={onConfirm}>
          Log Out
        </Button>
        <Button onClick={onCancel}>Cancel</Button>
      </Footer>
    </Container>
  );
}
