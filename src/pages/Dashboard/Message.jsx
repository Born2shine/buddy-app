import { useEffect, useState } from "react";
import * as IMAGES from "../../assets";
import Friend from "../../components/chats/Friend";
import * as ICONS from "../../components/icons";
import { getLocalStorageData } from "../../utils/helpers/storage";
import { useFormik } from "formik";
import { chatSchema } from "../../utils/validators/schema";
import { setLocalStorageData } from './../../utils/helpers/storage';

const Message = () => {
  const [activeTab, setActiveTab] = useState("contact");
  const chats = getLocalStorageData("chats");
  const [messages, setMessages] = useState(chats);
  const [loading, setLoading] = useState(false);


  const uuid = () => new Date().getUTCMilliseconds() + Math.random()

  // send message
  const onSubmit = (values, { resetForm }) => {
    if(values.message_to){
      let new_message = {...values, id: uuid(),}
      setMessages([...messages, new_message])
      resetForm()
    }
  };

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: {
        user_id: 1,
        message_to: "",
        auth_avatar: "https://randomuser.me/api/portraits/women/19.jpg",
      },
      validationSchema: chatSchema,
      onSubmit,
    });

  // load chats from local storage
  useEffect(() => {
    setLoading(true);
    if (chats) {
      setMessages(chats);
    }
  }, []);

  // update loading status
  useEffect(() => {
    if (messages) {
      setLoading(false);
      setLocalStorageData('chats', messages)
      console.log(messages);
    }
  }, [messages]);

  return (
    <div className='h-screen md:flex md:justify-between'>
      <aside
        className={`bg-[#EEE] p-4 rounded-[16px] fixed w-[90vw] md:w-[21%] ${
          activeTab === "contact" ? "" : "hidden"
        } md:block`}
      >
        <div className='flex justify-between'>
          <div className='flex items-center space-x-2'>
            <img
              className='w-12 h-12 rounded-full'
              src={IMAGES.AVATAR_3}
              alt=''
            />
            <div>
              <h4 className='leading-3 text-isOrange'>David Peter</h4>
              <span className='text-xs text-isDark'>Senior Developer</span>
            </div>
          </div>
          <span className='cursor-pointer'>
            <ICONS.BsPencil />
          </span>
        </div>
        <div className='mt-6'>
          <div className='relative'>
            <span className='absolute top-2 left-3 text-2xl text-isGray25'>
              <ICONS.BiSearch />
            </span>
            <input
              type='text'
              className="bg-[#F5F5F5] text-isGray25 text-sm p-[10px]  px-10 w-full rounded-full border-none focus:border-none focus:outline-none"
              placeholder='Search here...'
            />
          </div>
        </div>
        <hr className='mt-6 mb-8 bg-gray-400' />
        <div className='mt-4 pb-6 max-h-96 overflow-y-scroll md:pb-0'>
          <Friend
            avatar={IMAGES.AVATAR_2}
            name='Lisa Roy'
            message='Hi, are you Available Tomorrow?'
            time='10:35 AM'
            counter={0}
            isSent={false}
            active={true}
          />

          <Friend
            avatar={IMAGES.AVATAR_1}
            name='Jamie Taylor'
            message='Nice One.
            Will Do it tommorow'
            time='10:35 AM'
            counter={3}
            isSent={false}
          />

          <Friend
            avatar={IMAGES.AVATAR_3}
            name='Jason Roy'
            message='That’s Great. I am Looking for ...'
            time='10:35 AM'
            counter={0}
            isSent={true}
          />

          <Friend
            avatar={IMAGES.AVATAR_2}
            name='Amy Frost'
            message='Hi, will you start working? ...'
            time='10:35 AM'
            counter={0}
            isSent={true}
          />

          <Friend
            avatar={IMAGES.AVATAR_1}
            name='Paul Wilson'
            message='See you tommorow champ'
            time='10:35 AM'
            counter={0}
            isSent={true}
          />

          <Friend
            avatar={IMAGES.AVATAR_2}
            name='Ana Wlliams'
            message='??'
            time='10:35 AM'
            counter={1}
            isSent={false}
          />
        </div>
      </aside>
      <aside
        className={`h-screen fixed w-[90vw] md:w-[55%] md:ml-[22%] ${
          activeTab === "chat" ? "" : "hidden"
        } md:block`}
      >
        <div className='flex items-center justify-between border-b-2 pb-2'>
          <div className='flex items-center space-x-2 relative'>
            <img
              className='w-12 h-12 rounded-full'
              src={IMAGES.AVATAR_1}
              alt=''
            />
            <h4 className='text-isDark'>Lisa Roy</h4>
            <span className='w-3 h-3 absolute bottom-[3px] -left-[8px] content-none bg-green-500 rounded-full'></span>
          </div>
          <div className='flex space-x-2 text-isGray'>
            <span>
              <ICONS.BiSearch />
            </span>
            <span className='text-gray-400'>
              <ICONS.AiTwotoneHeart />
            </span>
            <span>
              <ICONS.FiBell />
            </span>
          </div>
        </div>
        <div className='mt-6 md:mx-5 max-h-[58%] overflow-y-scroll md:max-h-[78%]'>
          {/* single chat */}

          {loading ? (
            <h3>Loading...</h3>
          ) : messages ? (
            messages.map(
              ({
                id,
                user_id,
                message_from,
                message_to,
                avatar_from,
                auth_avatar,
              }) => (
                <div key={id} className='single-chat'>
                  {user_id === 2 && (
                    <div className='flex items-end space-x-2 md:w-3/6'>
                      <img
                        src={avatar_from}
                        className='w-5 h-5 rounded-full'
                        alt=''
                      />
                      <div className='bg-isGray35 p-2.5 rounded-lg text-sm font-thin'>
                        {message_from}
                      </div>
                    </div>
                  )}
                  {user_id === 1 && (
                    <div className='flex place-content-end mt-6'>
                      <div className='flex flex-row-reverse items-end gap-2 md:w-3/5'>
                        <img
                          src={auth_avatar}
                          className='w-5 h-5 rounded-full'
                          alt=''
                        />
                        <div className='bg-isGray35 p-2.5 rounded-lg text-sm text-isOrange font-thin'>
                          {message_to}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* <div className='relative mt-6 text-[#D9D9D9] text-sm font-thin text-center'>
                    <span className='w-[38%] md:w-[45%] h-[1px] bg-[#D9D9D9] content-none absolute left-0 top-3'></span>
                    Yesterday
                    <span className='w-[38%] md:w-[45%] h-[1px] bg-[#D9D9D9] content-none absolute right-0 top-3 font-thin'></span>
                  </div> */}
                </div>
              )
            )
          ) : (
            <div> Chat is empty! </div>
          )}
          {/* end single chat */}

          {/* <div className="relative mt-6 text-[#D9D9D9] text-sm font-thin text-center">
                        <span className="w-[38%] md:w-[45%] h-[1px] bg-[#D9D9D9] content-none absolute left-0 top-3"></span>
                        Yesterday
                        <span className="w-[38%] md:w-[45%] h-[1px] bg-[#D9D9D9] content-none absolute right-0 top-3 font-thin"></span>
                    </div> */}

          {/* single chat */}
          {/* <div className="single-chat mt-6 mb-">
                <div className="flex items-end space-x-2 md:w-3/6">
                    <img src={IMAGES.AVATAR_1} className="w-5 h-5 rounded-full" alt="" />
                    <div className="bg-isGray35 p-2.5 rounded-lg text-sm font-thin">Ok, I will just send it here. Plz be sure to fill the details before the end of the day.</div>
                </div>

                <div className="flex items-end space-x-2 md:w-3/6 mt-3">
                    <img src={IMAGES.AVATAR_1} className="w-5 h-5 rounded-full" alt="" />
                    <div className="bg-isGray35 p-2.5 rounded-lg text-sm font-thin">Ok, I will just send it here. Plz be sure to fill the details before the end of the day.</div>
                </div>
                
                <div className="flex place-content-end mt-4">
                    <div className="flex flex-row-reverse items-end gap-2 md:w-3/5">
                        <img src={IMAGES.AVATAR_1} className="w-5 h-5 rounded-full" alt="" />
                        <div className="bg-isGray35 p-2.5 rounded-lg text-sm text-isOrange font-thin">Hi David, have you gotten the project report pdf?</div>
                    </div>
                </div>

            </div> */}
          {/* end single chat */}

            <form onSubmit={handleSubmit}>
          <div className='bg-[#D9D9D9] w-full p-3 flex space-x-3 absolute bottom-32'>
            <div className='flex relative w-[100%]'>
              <span className='speaker absolute text-[20px] top-1.5 left-2 text-isGray cursor-pointer md:top-2 md:left-3 md:text-[24px]'>
                <ICONS.MdOutlineKeyboardVoice />
              </span>
              <input
                type='text'
                id='message_to'
                name='message_to'
                value={values.message_to}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder='Write Something...'
                className={`p-[10px] text-xs font-thin focus:outline-none rounded-full w-full pl-8 md:p-3 md:pl-10 md:text-[15px] ${
                  errors.message_to && touched.message_to && "border-red-600"
                }`}
              />
              <div className='flex space-x-1 absolute right-3 top-2 md:top-3 md:right-4 text-isGray md:text-[18px]'>
                <span className='cursor-pointer'>
                  <ICONS.ImAttachment />
                </span>
                <span className='cursor-pointer'>
                  <ICONS.AiOutlineCamera />
                </span>
                <span className='cursor-pointer'>
                  <ICONS.BsEmojiSmile />
                </span>
              </div>
            </div>
            <button className='bg-isOrange text-white p-2 rounded-full rotate-90 cursor-pointer md:w-10 md:h- md:grid md:place-content-center'
            type="submit"
            >
              <ICONS.HiPaperAirplane />
            </button>
          </div>
            </form>
        </div>
      </aside>
      <nav className='flex justify-around absolute left-0 bottom-0 bg-white w-[100vw] p-2 rounded-t-[20px] md:hidden'>
        <span
          className={`${
            activeTab === "contact" && "bg-isOrange text-white"
          } hover:bg-isOrange hover:text-white p-2`}
          onClick={() => setActiveTab("contact")}
        >
          <ICONS.FiUsers />
        </span>
        <span className='hover:bg-isOrange hover:text-white p-2'>
          <ICONS.MdPhone />
        </span>
        <span
          className={`${
            activeTab === "chat" && "bg-isOrange text-white"
          } hover:bg-isOrange hover:text-white p-2`}
          onClick={() => setActiveTab("chat")}
        >
          <ICONS.FaRegComment />
        </span>
        <span className='hover:bg-isOrange hover:text-white p-2'>
          <ICONS.BiCamera />
        </span>
      </nav>
    </div>
  );
};

export default Message;
