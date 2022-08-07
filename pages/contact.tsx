import type { NextPage } from 'next'
import { MainLayout } from "../components/layouts/MainLayout";
import Link from "next/link";

const ContactPage: NextPage = () =>
{
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>
      <p className="description">
        Get started by editing{ ' ' }
        <code className="code">pages/index.tsx</code>
      </p>
    </MainLayout>
  )
}

export default ContactPage
