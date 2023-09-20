import React,{useState} from 'react'
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };
  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
    <div className="flex justify-center items-center text-center">
      <Title title="CONTACT" des="Contact With Me" />
    </div>
    <div className="w-full">
      <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
        <ContactLeft />
        <div className="w-full lgl:w-[60%] h-full py-10 bg-white flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-md">
        <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
  {errMsg && (
    <p className="py-3 bg-red-100 text-red-600 text-center text-base tracking-wide rounded-lg">
      {errMsg}
    </p>
  )}
  {successMsg && (
    <p className="py-3 bg-green-100 text-green-600 text-center text-base tracking-wide rounded-lg">
      {successMsg}
    </p>
  )}
  <div className="w-full flex flex-col lgl:flex-row gap-10">
    <div className="w-full lgl:w-1/2 flex flex-col gap-4">
      <label className="text-sm text-gray-600 uppercase tracking-wide">
        Your name
      </label>
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        className={`${
          errMsg === "Username is required!" &&
          "border-red-500"
        } inputStyle focus:bg-gray-100 focus:border-none focus:outline-none h-12 pl-4`}
        type="text"
        placeholder="Your name"
      />
    </div>
    <div className="w-full lgl:w-1/2 flex flex-col gap-4">
      <label className="text-sm text-gray-600 uppercase tracking-wide">
        Phone Number
      </label>
      <input
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phoneNumber}
        className={`${
          errMsg === "Phone number is required!" &&
          "border-red-500"
        } inputStyle focus:bg-gray-100 focus:border-none focus:outline-none h-12 pl-4`}
        type="text"
        placeholder="Phone Number"
      />
    </div>
  </div>
  <div className="flex flex-col gap-4">
    <label className="text-sm text-gray-600 uppercase tracking-wide">
      Email
    </label>
    <input
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      className={`${
        errMsg === "Please give your Email!" &&
        "border-red-500"
      } inputStyle focus:bg-gray-100 focus:border-none focus:outline-none h-12 pl-4`}
      type="email"
      placeholder="Email"
    />
  </div>
  <div className="flex flex-col gap-4">
    <label className="text-sm text-gray-600 uppercase tracking-wide">
      Subject
    </label>
    <input
      onChange={(e) => setSubject(e.target.value)}
      value={subject}
      className={`${
        errMsg === "Plese give your Subject!" &&
        "border-red-500"
      } inputStyle focus:bg-gray-100 focus:border-none focus:outline-none h-12 pl-4`}
      type="text"
      placeholder="Subject"
    />
  </div>
  <div className="flex flex-col gap-4">
    <label className="text-sm text-gray-600 uppercase tracking-wide">
      Message
    </label>
    <textarea
      onChange={(e) => setMessage(e.target.value)}
      value={message}
      className={`${
        errMsg === "Message is required!" && "border-red-500"
      } textareaStyle focus:bg-gray-100 focus:border-none focus:outline-none h-32 pl-4`}
      cols="30"
      rows="8"
      placeholder="Your message"
    ></textarea>
  </div>
  <div className="w-full">
    <button
      onClick={handleSend}
      className="w-full h-12 bg-[rgb(234,239,241)] rounded-lg text-base text-black tracking-wider uppercase hover:bg-designColor duration-300 shadow-lg"
    >
      Send Message
    </button>
  </div>

  {errMsg && (
    <p className="py-3 bg-red-100 text-red-600 text-center text-base tracking-wide rounded-lg">
      {errMsg}
    </p>
  )}
  {successMsg && (
    <p className="py-3 bg-green-100 text-green-600 text-center text-base tracking-wide rounded-lg">
      {successMsg}
    </p>
  )}
</form>



        </div>
      </div>
    </div>
  </section>
  


  );
}

export default Contact