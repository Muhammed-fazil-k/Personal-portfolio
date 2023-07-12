import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <div>
      <Image src="/images/Profile.jpg" fill={true} />
      <p>
        Hello, I'm Muhammed Fazil K, a passionate web developer. Feel free to
        explore my portfolio to see some of my previous projects. If you have a
        project in mind or would like to discuss potential collaborations, don't
        hesitate to get in touch. Let's work together to bring your ideas to
        life and create impactful web experiences
      </p>
    </div>
  );
};

export default Introduction;
