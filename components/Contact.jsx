import { CustomButton, TextInput } from ".";

const Contact = () => {
  return (
    <div>
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.49995752014!2d90.25452938907345!3d23.78106687436648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1707925669786!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container flex px-5 py-24 mx-auto">
        <div className="relative z-10 flex flex-col w-full p-8 mt-10 bg-white rounded-lg lg:w-1/3 md:w-1/2 md:ml-auto md:mt-0">
          <h2 className="mb-1 text-lg font-medium text-gray-800">Feedback</h2>
          <p className="mb-5 text-gray-600">
            We'll love to hear your feedback!
          </p>

          <TextInput type="email" placeholder="Email" styles="bg-white mb-5" />

          <textarea
            className="h-32 px-4 py-2 mb-5 text-base bg-white border border-gray-400 rounded resize-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Message..."
          ></textarea>

          <CustomButton
            title="Send Feedback"
            containerStyles={`w-full block bg-[#3b81f5] text-white px-6 py-2.5 text-md rounded hover:bg-blue-800 focuc:outline-none flex-col items-center`}
          />

          <p className="mt-4 text-xs text-gray-500">
            We normally reply feedbacks withing 2 business days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
