import Link from "next/link";
import { ReactElement } from "react";
import { MainLayout } from "../../components/layouts/MainLayout";
import { NextPageWithLayout } from "../_app";

const PricingPage: NextPageWithLayout = () =>
{
  return (
    <>
      <h1>Pricing Page</h1>
      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>
      <p className="description">
        Get started by editing{ ' ' }
        <code className="code">pages/index.tsx</code>
      </p>
    </>
  )
}

PricingPage.getLayout = ( page: ReactElement ) =>
{
  return (
    <MainLayout>
      { page }
    </MainLayout>
  )
}

export default PricingPage
