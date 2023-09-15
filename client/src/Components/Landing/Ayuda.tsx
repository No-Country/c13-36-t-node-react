import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { useTranslation } from "react-i18next";

export default function Ayuda() {
  const { t } = useTranslation("landing");
  const data = [
    {
      titulo: t("helpQuestion1"),
      descripcion: t("answer1"),
    },
    {
      titulo: t("helpQuestion2"),
      descripcion: t("answer2"),
    },
    {
      titulo: t("helpQuestion3"),
      descripcion: t("answer3"),
    },
    {
      titulo: t("helpQuestion4"),
      descripcion: t("answer4"),
    },
    {
      titulo: t("helpQuestion5"),
      descripcion: t("answer5"),
    },
  ];
  return (
    <section
      className="px-6 h-screen flex justify-center flex-col my-16"
      id="ayuda"
    >
      <h1 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl my-10 mobile:my-4">
        {t("helpTitle")}
      </h1>
      <Accordion className="w-3/4 m-auto text-left my-4">
        {data.map((item, index) => (
          <AccordionItem className="border-2 p-4 rounded-lg mt-4" key={index}>
            <AccordionItemHeading>
              <AccordionItemButton className="font-bold font-sans flex items-center">
                {item.titulo}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="mt-4">{item.descripcion}</p>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
