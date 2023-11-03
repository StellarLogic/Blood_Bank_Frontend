import HeaderButton from "@/components/button/HeaderButton";
import HeroInput from "@/components/input/HeroInput";
import { Form, FormikProvider, useFormik } from "formik";
import { BiSearchAlt } from "react-icons/bi";

const TYPES = {
  REVIEWS: "REVIEWS",
  JOBS: "JOBS",
  FREELANCE: "FREELANCE",
};

const HeaderTab = () => {
  const formik = useFormik({
    initialValues: {
      selected: TYPES.REVIEWS,
    },
    onSubmit: (values) => console.log("values", values),
  });

  const { values, setFieldValue } = formik;

  const handleTab = (value: string) => setFieldValue("selected", value);

  const renderPlaceHolder = () => {
    if (values.selected === TYPES.REVIEWS) return "company";

    if (values.selected === TYPES.JOBS) return "position";

    if (values.selected === TYPES.FREELANCE) return "category";
  };

  return (
    <FormikProvider value={formik}>
      <Form>
        <div className="flex">
          <HeaderButton
            intent={values.selected === TYPES.REVIEWS ? "active" : "primary"}
            rounded="left"
            onClick={() => handleTab(TYPES.REVIEWS)}
          >
            Reviews
          </HeaderButton>
          <HeaderButton
            intent={values.selected === TYPES.JOBS ? "active" : "primary"}
            onClick={() => handleTab(TYPES.JOBS)}
          >
            Jobs
          </HeaderButton>
          <HeaderButton
            intent={values.selected === TYPES.FREELANCE ? "active" : "primary"}
            onClick={() => handleTab(TYPES.FREELANCE)}
            rounded="right"
          >
            Freelance
          </HeaderButton>
        </div>
        <div className="flex flex-col w-full overflow-hidden bg-white rounded-tl-none rounded-3xl md:flex-row ">
          <HeroInput placeholder={`Enter ${renderPlaceHolder()} name`} />
          <div className="w-full h-[1px] md:h-[45px]  md:my-3 bg-gray-200 md:w-1" />
          <HeroInput placeholder="Location" />
          <HeaderButton intent="danger">
            <div className="flex justify-center">
              <BiSearchAlt size={28} />
            </div>
          </HeaderButton>
        </div>
      </Form>
    </FormikProvider>
  );
};

export default HeaderTab;
