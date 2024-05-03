import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Space } from "antd";
import { useContext, useState } from "react";
import { RefContext } from "../../App";

export default function NavBar() {
  const [collapsed, setCollapsed] = useState(false);
  const refContext = useContext(RefContext);

  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    switch (e.key) {
      case "1-1":
        scrollToRef(refContext!.howItWorksRef);
        break;
      case "1-2":
        scrollToRef(refContext!.whyItsImportantRef);
        break;
      case "1-3":
        scrollToRef(refContext!.customizeRef);
        break;
      case "1-4":
        scrollToRef(refContext!.aboutUsRef);
        break;
      case "1-5":
        scrollToRef(refContext!.contactRef);
        break;
      default:
        break;
    }
  };

  const items: MenuProps["items"] = [
    {
      label: "Navigation",
      key: "1",
      children: [
        {
          label: "How it works",
          key: "1-1",
        },
        {
          label: "Why it's important",
          key: "1-2",
        },
        {
          label: "Pricing",
          key: "1-3",
        },
        {
          label: "About us",
          key: "1-4",
        },
        {
          label: "Contact",
          key: "1-5",
        },
      ],
    },
    {
      label: "Log in",
      key: "2",
    },
    {
      label: "Sign up",
      key: "3",
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const handleNavClick = (key: string) => {
    switch (key) {
      case "1-1":
        scrollToRef(refContext!.howItWorksRef);
        break;
      case "1-2":
        scrollToRef(refContext!.whyItsImportantRef);
        break;
      case "1-3":
        scrollToRef(refContext!.customizeRef);
        break;
      case "1-4":
        scrollToRef(refContext!.aboutUsRef);
        break;
      case "1-5":
        scrollToRef(refContext!.contactRef);
        break;
      default:
        break;
    }
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
          <button onClick={() => handleNavClick("1-1")}>How it works</button>
          <button onClick={() => handleNavClick("1-2")}>Pricing</button>
          <button onClick={() => handleNavClick("1-3")}>
            Why it's important
          </button>
          <button onClick={() => handleNavClick("1-4")}>About us</button>
          <button onClick={() => handleNavClick("1-5")}>Contact</button>
        </div>
        <div className="auth hidden lg:flex">
          <Space>
            <Button type="primary" ghost size="large">
              Log in
            </Button>
            <Button size="large" type="primary">
              Sign up
            </Button>
          </Space>
        </div>
        <div className="flex lg:hidden">
          <Dropdown menu={menuProps} trigger={["click"]}>
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
