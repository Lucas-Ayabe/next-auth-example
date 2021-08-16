import React from "react";
import withAuth from "../components/hocs/withAuth";
import SecretTemplate from "../components/presentation/templates/SecretTemplate";

const Template = withAuth(SecretTemplate);
const Secret = () => <Template />;

export default Secret;
