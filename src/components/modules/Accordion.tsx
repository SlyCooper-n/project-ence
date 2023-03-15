import * as Primitive from "@radix-ui/react-accordion";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { Arrow } from "./Arrow";

interface RootProps extends Primitive.AccordionMultipleProps {}

const Root = forwardRef<HTMLDivElement, RootProps>((props, ref) => (
  <Primitive.Root {...props} ref={ref} />
));
Root.displayName = "Accordion.Root";

interface ItemProps extends Primitive.AccordionItemProps {}

const Item = forwardRef<HTMLDivElement, ItemProps>(
  ({ children, className, ...props }, ref) => (
    <Primitive.Item
      className={twMerge(
        "overflow-hidden text-black first:mt-0 focus-within:relative focus-within:z-10",
        className,
      )}
      {...props}
      ref={ref}
    >
      {children}
    </Primitive.Item>
  ),
);
Item.displayName = "Accordion.Item";

interface TriggerProps extends Primitive.AccordionTriggerProps {}

const Trigger = forwardRef<HTMLButtonElement, TriggerProps>(
  ({ children, className, ...props }, ref) => (
    <Primitive.Header className="flex">
      <Primitive.Trigger
        className={twMerge(
          "group flex flex-1 items-center gap-3 p-10 text-xl font-semibold leading-none outline-none md:text-2xl",
          className,
        )}
        {...props}
        ref={ref}
      >
        {children}

        <Arrow className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
      </Primitive.Trigger>
    </Primitive.Header>
  ),
);
Trigger.displayName = "Accordion.Trigger";

interface ContentProps extends Primitive.AccordionContentProps {}

const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ children, className, ...props }, ref) => (
    <Primitive.Content
      className={twMerge(
        "overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp md:text-xl",
        className,
      )}
      {...props}
      ref={ref}
    >
      <div className="p-10">{children}</div>
    </Primitive.Content>
  ),
);
Content.displayName = "Accordion.Content";

export const Accordion = {
  Root,
  Item,
  Trigger,
  Content,
};
