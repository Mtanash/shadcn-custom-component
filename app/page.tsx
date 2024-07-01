import { ButtonGroup, ButtonGroupItem } from "@/components/button-group";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Custom shadcn components</h1>

      <p>Button Group</p>
      <ButtonGroup>
        <ButtonGroupItem variant="outline">test</ButtonGroupItem>
        <ButtonGroupItem variant="outline">test2</ButtonGroupItem>
        <ButtonGroupItem variant="outline">test3</ButtonGroupItem>
      </ButtonGroup>
    </main>
  );
}
