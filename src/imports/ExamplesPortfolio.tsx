import svgPaths from "./svg-v8kkqdcb60";
import imgImage from "figma:asset/0707e6b2022462187b7b2dab43ed95bab6b24a66.png";
import imgImage1RemovebgPreview1 from "figma:asset/37c4a0e079275d891cfef432ef778f614110d504.png";

function NavigationPill() {
  return (
    <div className="bg-[#e3e3e3] box-border content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[7.82px] shrink-0" data-name="Navigation Pill">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[15.548px] text-nowrap">
        <p className="leading-none whitespace-pre">About</p>
      </div>
    </div>
  );
}

function NavigationPill1() {
  return (
    <div className="bg-[#e3e3e3] box-border content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[7.82px] shrink-0" data-name="Navigation Pill">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[15.548px] text-nowrap">
        <p className="leading-none whitespace-pre">Skills</p>
      </div>
    </div>
  );
}

function NavigationPill2() {
  return (
    <div className="bg-[#e3e3e3] box-border content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[7.82px] shrink-0" data-name="Navigation Pill">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[15.548px] text-nowrap">
        <p className="leading-none whitespace-pre">Projects</p>
      </div>
    </div>
  );
}

function NavigationPill3() {
  return (
    <div className="bg-[#e3e3e3] box-border content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[7.82px] shrink-0" data-name="Navigation Pill">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[15.548px] text-nowrap">
        <p className="leading-none whitespace-pre">Contact me!</p>
      </div>
    </div>
  );
}

function NavigationPill4() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[7.82px] shrink-0" data-name="Navigation Pill">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[15.548px] text-nowrap">
        <p className="leading-none whitespace-pre">&nbsp;</p>
      </div>
    </div>
  );
}

function NavigationPillList() {
  return (
    <div className="basis-0 content-start flex flex-wrap gap-[8px] grow items-start justify-end min-h-px min-w-px relative shrink-0" data-name="Navigation Pill List">
      <NavigationPill />
      <NavigationPill1 />
      <NavigationPill2 />
      <NavigationPill3 />
      {[...Array(2).keys()].map((_, i) => (
        <NavigationPill4 key={i} />
      ))}
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white left-0 top-0 w-[1200px]" data-name="Header">
      <div className="box-border content-center flex flex-wrap gap-[24px] items-center overflow-clip p-[32px] relative rounded-[inherit] w-[1200px]">
        <NavigationPillList />
      </div>
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TextContentTitle() {
  return <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-[1328px] top-[244px]" data-name="Text Content Title" />;
}

function HeroImage() {
  return (
    <div className="absolute bg-[#7f7b7b] box-border content-stretch flex flex-col gap-[32px] items-center justify-center left-0 px-[24px] py-[160px] top-[94.74px] w-[1200px]" data-name="Hero Image">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TextContentTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Text Content Title">
      <p className="font-['Fascinate:Regular',_sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0c0c0d] text-[72px] text-center tracking-[-2.16px] w-full whitespace-pre-wrap">{`J  L  K A U S T U B H`}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 top-0">
      <TextContentTitle1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[86px] left-[278px] top-[283px] w-[644px]">
      <Frame />
    </div>
  );
}

function TextContentTitle2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Text Content Title">
      <p className="font-['Fascinate:Regular',_sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0c0c0d] text-[72px] text-center tracking-[-2.16px] w-full whitespace-pre-wrap">{`J  L  K A U S T U B H`}</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[1023px] top-[283px]">
      <TextContentTitle2 />
    </div>
  );
}

function Frame3() {
  return <div className="absolute h-[3px] left-0 top-[546.74px] w-px" />;
}

function TextContentHeading() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Text Content Heading">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.2] not-italic relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">About me!</p>
    </div>
  );
}

function Image() {
  return (
    <div className="min-w-[160px] relative shrink-0 size-[160px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e3e3e3] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-contain opacity-20 size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#757575] text-[16px] w-full">
        <p className="mb-0">I’m not just a developer; I like to design, take photos, race, make music, and occasionally try doing all of it at once. I’m driven by curiosity and the idea of making life a little easier (and cooler) through the things I create.</p>
        <p className="mb-0">Right now, I’m learning how to use tech to simplify my own world, one project at a time. I don’t have it all figured out yet, but that’s part of the fun. Every line of code, every idea, every experiment gets me closer.</p>
        <p>
          Anyway, enough about me, go ahead and explore what I’ve been working on.
          <br aria-hidden="true" />
          {` (You already know where to find me below 👇)`}
        </p>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-[160px] relative shrink-0" data-name="Body">
      <Text />
    </div>
  );
}

function Card() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[240px] relative rounded-[8px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-start flex flex-wrap gap-[24px] items-start min-w-inherit p-[24px] relative w-full">
          <Image />
          <Body />
        </div>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="content-between flex flex-wrap gap-[48px] h-[357px] items-center relative shrink-0 w-full" data-name="Cards">
      <Card />
    </div>
  );
}

function CardGridImage() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[48px] items-start left-0 p-[64px] top-[549.74px] w-[1200px]" data-name="Card Grid Image">
      <TextContentHeading />
      <Cards />
    </div>
  );
}

function TextContentHeading1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Text Content Heading">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.2] not-italic relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">Skills</p>
    </div>
  );
}

function Image1() {
  return (
    <div className="min-w-[160px] relative shrink-0 size-[160px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e3e3e3] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-contain opacity-20 size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">LockBox</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#757575] text-[16px] w-full">{`Lockbox - a `}</p>
    </div>
  );
}

function Body1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-[160px] relative shrink-0" data-name="Body">
      <Text1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[240px] relative rounded-[8px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-start flex flex-wrap gap-[24px] items-start min-w-inherit p-[24px] relative w-full">
          <Image1 />
          <Body1 />
        </div>
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="min-w-[160px] relative shrink-0 size-[160px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e3e3e3] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-contain opacity-20 size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">Pulse</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#757575] text-[16px] w-full">{`Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. `}</p>
    </div>
  );
}

function Body2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-[160px] relative shrink-0" data-name="Body">
      <Text2 />
    </div>
  );
}

function Card2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[240px] relative rounded-[8px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-start flex flex-wrap gap-[24px] items-start min-w-inherit p-[24px] relative w-full">
          <Image2 />
          <Body2 />
        </div>
      </div>
    </div>
  );
}

function Image3() {
  return (
    <div className="min-w-[160px] relative shrink-0 size-[160px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e3e3e3] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-contain opacity-20 size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">ASIS</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#757575] text-[16px] w-full">{`Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. `}</p>
    </div>
  );
}

function Body3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-[160px] relative shrink-0" data-name="Body">
      <Text3 />
    </div>
  );
}

function Card3() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[240px] relative rounded-[8px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-start flex flex-wrap gap-[24px] items-start min-w-inherit p-[24px] relative w-full">
          <Image3 />
          <Body3 />
        </div>
      </div>
    </div>
  );
}

function Cards1() {
  return (
    <div className="content-between flex flex-wrap gap-[48px] h-[357px] items-center relative shrink-0 w-full" data-name="Cards">
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function CardGridImage1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[48px] items-start left-0 p-[64px] top-[1111.74px] w-[1200px]" data-name="Card Grid Image">
      <TextContentHeading1 />
      <Cards1 />
    </div>
  );
}

function TextContentHeading2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0" data-name="Text Content Heading">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">Projects</p>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[20px] w-full">
        <p className="leading-[1.2]">&nbsp;</p>
      </div>
    </div>
  );
}

function Image4() {
  return (
    <div className="min-w-[160px] relative shrink-0 size-[160px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e3e3e3] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-contain opacity-20 size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">LockBox</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#757575] text-[16px] w-full">A secure online space for storing and managing files. Users can upload, organize, and access documents safely, with custom permissions and real-time updates ensuring privacy and control.</p>
    </div>
  );
}

function Body4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-[160px] relative shrink-0" data-name="Body">
      <Text4 />
    </div>
  );
}

function Card4() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[240px] relative rounded-[8px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-start flex flex-wrap gap-[24px] items-start min-w-inherit p-[24px] relative w-full">
          <Image4 />
          <Body4 />
        </div>
      </div>
    </div>
  );
}

function Image5() {
  return (
    <div className="min-w-[160px] relative shrink-0 size-[160px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e3e3e3] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-contain opacity-20 size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">Pulse</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#757575] text-[16px] w-full">An AI-powered wellness platform that helps students track moods, write journals, and join chatrooms to find people. Suggests helpful resources and includes a voice-based assistant for easy interaction.</p>
    </div>
  );
}

function Body5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-[160px] relative shrink-0" data-name="Body">
      <Text5 />
    </div>
  );
}

function Card5() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[240px] relative rounded-[8px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-start flex flex-wrap gap-[24px] items-start min-w-inherit p-[24px] relative w-full">
          <Image5 />
          <Body5 />
        </div>
      </div>
    </div>
  );
}

function Image6() {
  return (
    <div className="min-w-[160px] relative shrink-0 size-[160px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e3e3e3] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-contain opacity-20 size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">ASIS</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#757575] text-[16px] w-full">AI Based system to create custom podcasts and summaries of documents for students to understand concepts easily and accurately. Chatbot to answer detailed questions.</p>
    </div>
  );
}

function Body6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-[160px] relative shrink-0" data-name="Body">
      <Text6 />
    </div>
  );
}

function Card6() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[240px] relative rounded-[8px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-start flex flex-wrap gap-[24px] items-start min-w-inherit p-[24px] relative w-full">
          <Image6 />
          <Body6 />
        </div>
      </div>
    </div>
  );
}

function Cards2() {
  return (
    <div className="content-between flex flex-wrap gap-[48px] h-[357px] items-center relative shrink-0 w-full" data-name="Cards">
      <Card4 />
      <Card5 />
      <Card6 />
    </div>
  );
}

function Image7() {
  return (
    <div className="min-w-[160px] relative shrink-0 size-[160px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e3e3e3] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-contain opacity-20 size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">PhishGuard - 360</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#757575] text-[16px] w-full">Detect a phishing website! Just paste the URL and we’ll show you if its legit.</p>
    </div>
  );
}

function Body7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-[160px] relative shrink-0" data-name="Body">
      <Text7 />
    </div>
  );
}

function Card7() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[240px] relative rounded-[8px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-start flex flex-wrap gap-[24px] items-start min-w-inherit p-[24px] relative w-full">
          <Image7 />
          <Body7 />
        </div>
      </div>
    </div>
  );
}

function Image8() {
  return (
    <div className="min-w-[160px] relative shrink-0 size-[160px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e3e3e3] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-contain opacity-20 size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">Personal Portfolios</p>
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#757575] text-[16px] w-full">
        <p className="mb-0">{`Haha! I Put this in without my friend knowing, don’t tell him. `}</p>
        <p>He never paid me lol.</p>
      </div>
    </div>
  );
}

function Body8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-[160px] relative shrink-0" data-name="Body">
      <Text8 />
    </div>
  );
}

function Card8() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[240px] relative rounded-[8px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-start flex flex-wrap gap-[24px] items-start min-w-inherit p-[24px] relative w-full">
          <Image8 />
          <Body8 />
        </div>
      </div>
    </div>
  );
}

function Image9() {
  return (
    <div className="min-w-[160px] relative shrink-0 size-[160px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e3e3e3] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-contain opacity-20 size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">Online Tambola</p>
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#757575] text-[16px] w-full">
        <p className="mb-0">Play Tambola like you play scribble.</p>
        <p>A little work in progress but its about to be ready!</p>
      </div>
    </div>
  );
}

function Body9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-[160px] relative shrink-0" data-name="Body">
      <Text9 />
    </div>
  );
}

function Card9() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[240px] relative rounded-[8px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-start flex flex-wrap gap-[24px] items-start min-w-inherit p-[24px] relative w-full">
          <Image9 />
          <Body9 />
        </div>
      </div>
    </div>
  );
}

function Cards3() {
  return (
    <div className="content-between flex flex-wrap gap-[48px] h-[357px] items-center relative shrink-0 w-full" data-name="Cards">
      <Card7 />
      <Card8 />
      <Card9 />
    </div>
  );
}

function CardGridImage2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[48px] items-start left-0 p-[64px] top-[1673.74px] w-[1200px]" data-name="Card Grid Image">
      <TextContentHeading2 />
      <Cards2 />
      <Cards3 />
    </div>
  );
}

function XLogo() {
  return (
    <div className="h-[24px] relative shrink-0 w-[23.98px]" data-name="X Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="X Logo">
          <path d={svgPaths.p16d01100} fill="var(--fill-0, #1E1E1E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function LogoInstagram() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Logo Instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_3250)" id="Logo Instagram">
          <path d={svgPaths.p3c382d72} fill="var(--fill-0, #1E1E1E)" id="Icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_3250">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoYouTube() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Logo YouTube">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_3247)" id="Logo YouTube">
          <path d={svgPaths.p13f17d00} fill="var(--fill-0, #1E1E1E)" id="Icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_3247">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LinkedIn() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="LinkedIn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_3206)" id="LinkedIn">
          <path d={svgPaths.p167f5280} fill="var(--fill-0, #1E1E1E)" id="Icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_3206">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonList() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Button List">
      <XLogo />
      <LogoInstagram />
      <LogoYouTube />
      <LinkedIn />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start min-w-[240px] relative shrink-0 w-[262px]" data-name="Title">
      <ButtonList />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-white left-0 top-[2672.74px] w-[1200px]" data-name="Footer">
      <div className="box-border content-start flex flex-wrap gap-[16px] items-start overflow-clip pb-[160px] pt-[32px] px-[32px] relative rounded-[inherit] w-[1200px]">
        <Title />
      </div>
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TextContentTitle3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Text Content Title">
      <p className="font-['Fascinate:Regular',_sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0c0c0d] text-[72px] text-center tracking-[-2.16px] w-full whitespace-pre-wrap">{`J  L  K A U S T U B H`}</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 top-0">
      <TextContentTitle3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[86px] left-[-467px] top-[283px] w-[644px]">
      <Frame5 />
    </div>
  );
}

export default function ExamplesPortfolio() {
  return (
    <div className="bg-white relative size-full" data-name="Examples/Portfolio">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[10px] justify-center leading-[0] left-1/2 not-italic text-[15.548px] text-black text-center top-[43px] translate-x-[-50%] translate-y-[-50%] w-[50px]">
        <p className="leading-none">JLK</p>
      </div>
      <Header />
      <TextContentTitle />
      <div className="absolute bg-[#d9d9d9] left-[13px] size-[75px] top-[9px]" />
      <HeroImage />
      <Frame1 />
      <Frame4 />
      <Frame3 />
      <CardGridImage />
      <CardGridImage1 />
      <CardGridImage2 />
      <Footer />
      <Frame2 />
      <div className="absolute h-[505px] left-[149px] top-[39px] w-[901px]" data-name="image_1-removebg-preview 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImage1RemovebgPreview1} />
      </div>
    </div>
  );
}