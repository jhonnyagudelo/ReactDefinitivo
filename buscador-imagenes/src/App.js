import { Formik, Form, Field } from "formik";

const App = () => {
  return (
    <div>
      <header>
        <Formik
          initialValues={{ search: "" }}
          onSubmit={async (values) => {
            //llamar a la api de unplash
            console.log(values);
          }}
        >
          <Form>
            <Field name="search" />
          </Form>
        </Formik>
      </header>
    </div>
  );
};

export default App;
