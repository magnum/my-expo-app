import { Container } from "components/Container";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

import "../global.css";

export default function RootLayout() {
  return (
    <Container>
        <StatusBar style="dark" />
        <Slot />
    </Container>
  );
}