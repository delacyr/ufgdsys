import { Stack } from "@chakra-ui/react";
import React from "react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="Geral" >
        <NavLink icon={RiDashboardLine} href="/dashboard" title="Dashboard" />
        <NavLink icon={RiContactsLine} href="/users" title="Usuários" />
      </NavSection>

      <NavSection title="Automação" >
        <NavLink icon={RiInputMethodLine} href="/forms" title="Formulários" />
        <NavLink icon={RiGitMergeLine} href="/automation" title="Automação" />
      </NavSection>
    </Stack>
  );
}