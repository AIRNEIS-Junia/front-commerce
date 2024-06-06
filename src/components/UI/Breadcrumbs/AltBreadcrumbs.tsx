import React from "react";
import Link from "next/link";

type AltBreadcrumbItem = {
  label: string;
  path: string;
};

type AltBreadcrumbsProps = {
  items: AltBreadcrumbItem[];
};

const AltBreadcrumbs: React.FC<AltBreadcrumbsProps> = ({ items }) => (
  <div className="breadcrumb">
    {items.map((item, index) => (
      <React.Fragment key={index}>
        <Link href={item.path}>{item.label}</Link>
        {index < items.length - 1 && " / "}
      </React.Fragment>
    ))}
  </div>
);

export default AltBreadcrumbs;
