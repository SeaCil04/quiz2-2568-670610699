//import { useState } from "react";
import { Button, Stack, Title, Divider, Container } from "@mantine/core";
//import { v4 as uuidv4 } from "uuid";
// import  Modal from "../components/Modal";
// import ItemCard from "../components/ItemCard"

// type Expense = {
//   id: string;
//   name: string;
//   amount: number | string;
//   category: string;
// };

export default function ExpenseTracker() {
  // const [opened, setOpened] = useState(false);
  // const [expenses, setExpenses] = useState<Expense[]>([]);
  // const categories = ["Food", "Transport", "Entertainment"];
  // const handleAdd = () => {
  //   const newitem: Expense = {
  //     id: uuidv4()
  //     // name : 
  //     // amount : 
  //     // category : 
  //   };
  //   //setTasks((prev) => [...prev, newTask]);
  // };

  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Expense Tracker
      </Title>
      <Button>Add Expense Item</Button>
      {/* Type additional AddExpenseModal here. */}

      <Divider my="md" />
      {/* Type additional total cost here. */}
      <Title order={4}>Total cost: {0} Baht</Title>
      <Stack my="sm">
        <Title>Food: {0} Bath</Title>
        <Title>Transport: {0} Bath</Title>
        <Title>Entertainment: {0} Bath</Title>
      </Stack>

      <Divider my="md" />
      {/* Type additional card here. */}
      <Stack>{/* Type additional expense card list here. */}</Stack>

    </Container>
  );
}
