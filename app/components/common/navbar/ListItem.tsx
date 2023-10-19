import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import React, { Ref, forwardRef } from "react";

type Props = React.HTMLAttributes<HTMLAnchorElement> & {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
};

const ListItem = forwardRef(
  (
    { className, children, title, href }: Props,
    forwardedRef: Ref<HTMLAnchorElement>
  ) => {
    return (
      <li>
        <NavigationMenu.Link asChild>
          <a
            className={classNames("ListItemLink", className)}
            href={href}
            ref={forwardedRef}
          >
            <div className="ListItemHeading">{title}</div>
            <p className="ListItemText">{children}</p>
          </a>
        </NavigationMenu.Link>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";

export default ListItem;
