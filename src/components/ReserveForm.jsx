import React, { useState } from "react";
import { Select, Input, DatePicker, TimePicker, message } from "antd";
import { useServieStore } from "../stores/serviceStore";
import { shallow } from "zustand/shallow";
import axios from "../axios";

const { TextArea } = Input;

const ReserveForm = () => {
  const { services } = useServieStore((state) => state, shallow);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState([]);
  const [reserveDate, setReserveDate] = useState("");
  const [reserveHour, setReserveHour] = useState("");
  const [info, setInfo] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const clearForm = () => {
    setName("");
    setLastName("");
    setPhone("");
    setService([]);
    setReserveDate("");
    setReserveHour("");
    setInfo("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: `${name} ${lastName}`,
      phone,
      service: service.toString(),
      reserveDate,
      reserveHour,
      info,
    };
    const res = await axios.post("/reserve", data);
    messageApi.open({
      type: "success",
      content: res.data,
    });
    clearForm();
  };

  return (
    <>
      {contextHolder}

      <div className="container mx-auto flex justify-center py-5 px-2">
        <div className="flex flex-col items-center justify-center w-full">
          <h3 className="text-2xl text-white mb-2 text-center">
            დაჯავშნე შეხვედრა
          </h3>
          <h4 className=" text-white mb-5 text-center">
            ჩვეულებრივ გიპასუხებთ 24 საათში.
          </h4>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full gap-5  lg:w-1/2 "
          >
            <div className="flex  flex-col md:flex-row gap-3 justify-between">
              <Input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                size="large"
                placeholder="სახელი"
                required
              />
              <Input
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                size="large"
                placeholder="გვარი"
                required
              />
            </div>

            <div className="flex flex-col md:flex-row gap-3 justify-between">
              <Input
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full md:w-1/2"
                size="large"
                placeholder="ტელეფონი"
                required
              />
              <Select
                className="w-full md:w-1/2 text-black "
                value={service}
                onChange={setService}
                size="large"
                mode="tags"
                placeholder="სერვისი"
                options={services.map((item) => {
                  return {
                    value: item.title,
                    label: item.title,
                  };
                })}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-3 justify-between">
              <DatePicker
                name="reserveDate"
                onChange={(date, dateString) => setReserveDate(dateString)}
                size="large"
                className="w-full md:w-1/2"
                placeholder="აირჩიეთ რიცხვი"
              />
              <TimePicker
                name="reserveHour"
                onChange={(time, timeString) => setReserveHour(timeString)}
                size="large"
                className="w-full md:w-1/2"
                placeholder="აირჩიეთ დრო"
              />
            </div>

            <TextArea
              value={info}
              name="info"
              onChange={(e) => setInfo(e.target.value)}
              rows={8}
              placeholder="დამატებითი ინფორმაცია"
              className="text-lg"
            />
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="border rounded bg-[#82a6fa] hover:bg-transparent transition-all duration-500 text-white py-3 w-3/5 md:w-2/5  mt-3"
              >
                გაგზავნა
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReserveForm;
