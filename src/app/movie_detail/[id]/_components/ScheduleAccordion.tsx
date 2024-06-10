import {
  Accordion,
  AccordionItem,
  Box,
  SegmentedControl,
  SegmentedControlItem,
} from "@yamada-ui/react";
import React from "react";
import { ScheduleList } from "./ScheduleList";
import { scheduleData } from "@/mock/schedule/mock";
import { fetchScheduleInterface } from "@/mock/schedule/scheduleInterface";

export const ScheduleAccordion = () => {
  const style = {
    color: "scheduleAccordion.text",
    bgColor: "scheduleAccordion.bg",
    w: "100%",
  };

  const items: SegmentedControlItem[] = [
    { label: "6月3日", value: "6月3日" },
    { label: "6月4日", value: "6月4日" },
    { label: "6月5日", value: "6月5日" },
    { label: "6月6日", value: "6月6日" },
    { label: "6月7日", value: "6月7日" },
    { label: "6月8日", value: "6月8日" },
    { label: "6月9日", value: "6月9日" },
  ];

  return (
    <>
      <Box margin="40px 0">
        <SegmentedControl borderRadius="0" w="100%" items={items} />
        <Accordion
          sx={{
            ...style,
          }}
          isToggle
        >
          <AccordionItem p="20px 0" label="東京">
            <Box display="flex">
              {scheduleData.map((data: fetchScheduleInterface) => (
                <ScheduleList
                  key={data.id}
                  screening_time={data.screening_time}
                  screen_number={data.screen_number}
                  reservation={data.reservation}
                />
              ))}
            </Box>
          </AccordionItem>

          <AccordionItem p="20px 0" label="名古屋">
            <Box display="flex">
              {scheduleData.map((data: fetchScheduleInterface) => (
                <ScheduleList
                  key={data.id}
                  screening_time={data.screening_time}
                  screen_number={data.screen_number}
                  reservation={data.reservation}
                />
              ))}
            </Box>
          </AccordionItem>

          <AccordionItem p="20px 0" label="大阪">
            <Box display="flex">
              {scheduleData.map((data: fetchScheduleInterface) => (
                <ScheduleList
                  key={data.id}
                  screening_time={data.screening_time}
                  screen_number={data.screen_number}
                  reservation={data.reservation}
                />
              ))}
            </Box>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
};
