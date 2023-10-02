import { Button, toast, Toast, Toaster } from "@animareflection/ui";

import { Wrapper } from "components";

const ToastDemo = () => {
  const promise = () => {
    void toast.promise(
      new Promise((resolve, reject) =>
        setTimeout(Math.random() >= 0.5 ? resolve : reject, 2000),
      ),
      {
        loading: (
          <Toast
            variant="loading"
            title="Loading..."
            description="toast description"
          />
        ),
        success: (
          <Toast
            variant="success"
            title="Success!"
            description="toast description"
          />
        ),
        error: (
          <Toast
            variant="error"
            title="Error"
            description="toast description"
          />
        ),
      },
    );
  };

  return (
    <Wrapper title="Toast">
      <Button variant="primary" w="fit-content" onClick={promise}>
        Make Toast
      </Button>
      <Toaster />
    </Wrapper>
  );
};

export default ToastDemo;
