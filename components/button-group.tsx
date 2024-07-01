"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
} from "react";

type ButtonGroupItemElement = ReactElement<typeof ButtonGroupItem>;

const ButtonGroup = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children: ButtonGroupItemElement | ButtonGroupItemElement[];
  }
>(({ className, children, ...props }, ref) => {
  const childrens = Children.toArray(children);

  return (
    <div ref={ref} className={cn("flex -space-x-px", className)} {...props}>
      {Children.map(childrens, (child, index) => {
        if (!isValidElement(child)) return child;

        const isFirstChild = index === 0;
        const isLastChild = index === childrens.length - 1;

        return cloneElement(child, {
          ...child.props,
          className: cn(
            child.props.className,
            isFirstChild && "rounded-r-none",
            isLastChild && "rounded-l-none",
            !isFirstChild && !isLastChild && "rounded-none"
          ),
        });
      })}
    </div>
  );
});
ButtonGroup.displayName = "ButtonGroup";

const ButtonGroupItem = forwardRef<
  HTMLButtonElement,
  ButtonProps & { children?: React.ReactNode }
>(({ className, ...props }, ref) => {
  return (
    <Button ref={ref} className={cn(className)} {...props}>
      {props.children}
    </Button>
  );
});
ButtonGroupItem.displayName = "ButtonGroupItem";

export { ButtonGroup, ButtonGroupItem };

/**
 *  Example Usage
 *
 *
 *  <ButtonGroup>
 *    <ButtonGroupItem variant="outline">test</ButtonGroupItem>
 *    <ButtonGroupItem variant="outline">test2</ButtonGroupItem>
 *    <ButtonGroupItem variant="outline">test3</ButtonGroupItem>
 *  </ButtonGroup>
 */
