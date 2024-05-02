import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Space } from "antd";
import { useState } from "react";

export default function NavBar() {
  const [collapsed, setCollapsed] = useState(false);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    console.log("click", e);
  };

  const items: MenuProps["items"] = [
    {
      label: "How it works",
      key: "1",
    },
    {
      label: "Pricing",
      key: "2",
    },
    {
      label: "Why it's important",
      key: "3",
    },
    {
      label: "About us",
      key: "4",
    },
    {
      label: "Contact",
      key: "5",
    },
    {
      label: "Authentication",
      key: "6",
      children: [
        {
          key: "6-1",
          label: "Log in",
        },
        {
          key: "6-2",
          label: "Sign up",
        },
      ],
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className="navbar py-[20px] px-[50px] sm:py-[56px] sm:px-[90px]">
      <div className="flex gap-5 justify-between items-center">
        <div className="rate-it flex font-main font-bold gap-1">
          <div className="w-8">
            <img src="/img/logo.svg" alt="" className="" />
          </div>
          <span className="text-xl">Rate it</span>
        </div>
        <div className="nav hidden lg:flex gap-5 font-main font-semibold">
          <span>How it works</span>
          <span>Pricing</span>
          <span>Why it's important</span>
          <span>About us</span>
          <span>Contact</span>
        </div>
        <div className="auth hidden lg:flex">
          <Space>
            <Button type="primary" ghost size="large">
              Login
            </Button>
            <Button size="large" type="primary">
              Sign up
            </Button>
          </Space>
        </div>
        <div className="flex lg:hidden">
          <Dropdown menu={menuProps} trigger={['click']}>
            <Button
              type="primary"
              ghost
              onClick={() => setCollapsed(!collapsed)}
            >
              <Space>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                <span className="hidden sm:flex">Menu</span>
              </Space>
            </Button>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
