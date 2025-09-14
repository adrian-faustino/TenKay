## UI components

This folder contains all of the reusable UI components for the project.  
They are built with [Radix UI](https://www.radix-ui.com/), [Tailwind CSS](https://tailwindcss.com/), and follow a consistent API.

⚡ Note: **Components in this folder are not added manually.**\
They are generated using the [shadcn/ui CLI](https://ui.shadcn.com/docs/cli). See the [Adding a new component](#adding-a-new-component) section below.

## Adding a new component

Find the component name under https://ui.shadcn.com/docs/components and run the following command:

```
npx shadcn@latest add <component-name>
```

This will generate the respective component file under `src/components/ui`

## Using a component

Importing a single component

```
import { Switch } from "@ui";
```

Importing multiple components

```
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@ui";
```
