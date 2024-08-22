import React from 'react';
import { FaLinkedin, FaEnvelope, FaTiktok, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

type SocialLinksProps = {
  linkedin: string;
  email: string;
  twitter?: string;
  facebook?: string;
  tiktok?: string;
  instagram?: string;
};

const SocialLinks: React.FC<SocialLinksProps> = ({ linkedin, email, twitter, facebook, tiktok, instagram }) => (
  <div className="flex py-4 pt-8 w-full justify-between px-[60px] lg:px-[20px] md:px-[60px] md:py-0 md:pt-0">
    <a href={linkedin} className='bg-black h-fit p-2 text-white rounded-full'>
      <FaLinkedin size={24} />
    </a>
    <a href={`mailto:${email}`} className='bg-black h-fit p-2 rounded-full'>
      <FaEnvelope size={24} />
    </a>
    {twitter && (
      <a href={twitter} className='bg-black h-fit p-2 rounded-full'>
        <FaTwitter size={24} />
      </a>
    )}
    {facebook && (
      <a href={facebook} className='bg-black h-fit p-2 rounded-full'>
        <FaFacebook size={24} />
      </a>
    )}
    {tiktok && (
      <a href={tiktok} className='bg-black h-fit p-2 rounded-full'>
        <FaTiktok size={24} />
      </a>
    )}
    {instagram && (
      <a href={instagram} className='bg-black h-fit p-2 rounded-full'>
        <FaInstagram size={24} />
      </a>
    )}
  </div>
);

type TeamMemberProps = {
  imageSrc: string;
  name: string;
  position: string;
  socialLinks: SocialLinksProps;
};

const TeamMember: React.FC<TeamMemberProps> = ({ imageSrc, name, position, socialLinks }) => (
  <div className="grid bg-white py-4 shadow-black shadow-lg justify-center text-center">
    <img src={imageSrc} alt={name} />
    <p className='text-black py-2 text-base md:text-lg font-semibold'>{name}</p>
    <p className='text-[#000000] py-1 text-center text-sm md:text-base md:pt-0 pb-3'>{position}</p>
    <SocialLinks {...socialLinks} />
  </div>
);

const Team: React.FC = () => {
  return (
    <div className='bg-white lg:px-28 px-6 py-6'>
      <h1 className='text-black text-center text-3xl md:text-4xl lg:text-5xl font-bold py-10'> Xifin Team </h1>
      <div className='text-center flex items-center justify-center'>
        <p className='text-black text-center text-3xl md:text-4xl justify-center lg:text-5xl font-bold flex'>
          10+ <em className='text-black text-[16px] md:text-[24px] w-[50%] leading-none md:w-[60%] block font-medium not-italic'> Experts in the field </em>
        </p>
      </div>

      <div className='text-center'>
        <div className='grid gap-8 md:flex md:justify-between py-12 md:py-16 items-center text-center'>
          <p className='text-[#938888] text-center text-3xl md:text-4xl lg:text-5xl font-bold flex'>
            43% <em className='text-black text-[16px] md:text-[24px] w-full leading-none md:w-[60%] font-medium not-italic text-left px-6 flex items-center'> Mobile & front-end engineers </em>
          </p>
          <p className='text-[#938888] text-center text-3xl md:text-4xl lg:text-5xl font-bold flex'>
            35% <em className='text-black text-[16px] md:text-[24px] w-full leading-none md:w-[60%] font-medium not-italic text-left px-6 flex items-center'> Brand Designers </em>
          </p>
        </div>

        <div className='grid gap-8 md:flex md:justify-between py-12 md:py-16 items-center text-center'>
          <p className='text-[#938888] text-center text-3xl md:text-4xl lg:text-5xl font-bold flex'>
            <img src='./images/Group8.svg' alt='Team Growth' className='inline' />
            <em className='text-black text-[16px] md:text-[24px] w-full leading-none md:w-[60%] font-medium not-italic text-left px-2 flex items-center'> 50% of team growth per year </em>
          </p>
          <p className='text-[#938888] text-center text-3xl md:text-4xl lg:text-5xl font-bold flex'>
            <img src='./images/Group7.svg' alt='Experience' className='inline' />
            <em className='text-black text-[16px] md:text-[24px] w-full leading-none md:w-[60%] font-medium not-italic text-left px-2 flex items-center'> 80% of the team have at least 5 years of experience </em>
          </p>
        </div>
      </div>

      <h1 className='text-black text-center text-3xl md:text-4xl lg:text-5xl font-bold py-10'> Meet the Management Team </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 md:justify-between grid-cols-1 gap-8">
        <TeamMember
          imageSrc="./images/jude.png"
          name="Jude Iria"
          position="CEO, Xifin Enterprise"
          socialLinks={{
            linkedin: "https://www.linkedin.com/in/jude-iria",
            email: "JudeIria3390@gmail.com",
            twitter: "https://x.com/coachjude_XER",
            facebook: "https://www.facebook.com/Coach.jude.iria?mibextid=LQQJ4d"
          }}
        />
        <TeamMember
          imageSrc="./images/jennifer.png"
          name="Jessica Okogwu"
          position="Content/SMM Manager & Team Lead"
          socialLinks={{
            linkedin: "linked-in-url-1",
            email: "jessicaokogwu@gmail.com",
            twitter: "https://x.com/JessicaOkogwu?t=72WCu6SLRNMlwkgH2mtypA&s=09",
            facebook: "https://www.facebook.com/jessica.okogwu?mibextid=ZbWKwL"
          }}
        />
        <TeamMember
          imageSrc="./images/ernest.png"
          name="Oluwafemi Ernest"
          position="Brand Designer"
          socialLinks={{
            linkedin: "https://www.linkedin.com/in/oluwafemi-ernest-7611b3240/",
            email: "ernestoluwafemi14@gmail.com",
            twitter: "https://x.com/ernnyolu?s=09",
            instagram: "https://www.instagram.com/your.brand.designer/"
          }}
        />
        <TeamMember
          imageSrc="./images/josh.png"
          name="Audu Joshua"
          position="Web Developer"
          socialLinks={{
            linkedin: "https://www.linkedin.com/in/audu-joshua/",
            email: "empire4josh@gmail.com",
            twitter: "https://x.com/adinoyi_audu",
            instagram: "https://www.instagram.com/auduempire/"
          }}
        />
      </div>
    </div>
  );
};

export default Team;
