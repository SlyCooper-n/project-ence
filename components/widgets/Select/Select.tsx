import { SelectItemProps, SelectProps } from "@core/types";
import {
  Content,
  Icon,
  Item,
  ItemIndicator,
  ItemText,
  Portal,
  Root,
  Trigger,
  Value,
} from "@radix-ui/react-select";
import { Check } from "phosphor-react";

export const Select = ({ container, placeholder, children }: SelectProps) => {
  return (
    <Root>
      <Trigger className="group relative w-full px-2 py-1 flex justify-between items-center border border-primary rounded-sm">
        <Value placeholder={placeholder} />

        <Icon asChild>
          <div className="absolute right-0 h-full p-2 aspect-square flex justify-center items-center bg-primary">
            <img
              src="/icons/arrow.svg"
              alt="arrow"
              className="rotate-90 group-hover:-rotate-90 transition-transform"
            />
          </div>
        </Icon>
      </Trigger>

      <Portal container={container}>
        <Content className="w-[85vw] mx-auto p-2 bg-black text-white rounded-sm">
          {children}
        </Content>
      </Portal>
    </Root>
  );
};

export const SelectItem = ({ value, text }: SelectItemProps) => {
  return (
    <Item value={value} className="flex items-center gap-2 cursor-pointer">
      <ItemText>{text}</ItemText>

      <ItemIndicator>
        <Check />
      </ItemIndicator>
    </Item>
  );
};
