import TSList from "../components/TS/TSList";
import MemCardList from "../components/members/MemCardList";
//import Card from "../components/ui/Card";

const TEAM = [
  {
    id: "shams",
    name: "Shams Alshabani",
    info: "Freshman in Computer Science",
  },
  {
    id: "khatija",
    name: "Khatija Syeda",
    info: "Freshman in Computer Science and Statistics",
  },
  {
    id: "ananya",
    name: "Ananya Barman",
    info: "Freshman in Computer Science",
  },
  {
    id: "vincent",
    name: "Vincent Wang",
    info: "Freshman in Physics",
  },
  {
    id: "haodong",
    name: "Haodong Song",
    info: "Freshman in Engineering Undeclared          ",
  },
  {
    id: "cheng",
    name: "Cheng Wang",
    info: "Freshman in Physics",
  },
];

const TECH_STACK = [
  {
    id: "frontend",
    title: "Frontend: ReactJS",
    image: "https://www.mobinius.com/wp-content/uploads/2018/10/react.png",
    description:
      "ReactJS allows us to create a modular design that is fast to build and is the industry standard for web development.",
    link: "https://reactjs.org/",
  },
  {
    id: "backend",
    title: "Backend: Flask",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1200px-Flask_logo.svg.png",
    description:
      "For our backend we used Flask because it is native for computer vision tools because they are in Python.",
    link: "https://flask.palletsprojects.com/en/2.0.x/",
  },
  {
    id: "deployment",
    title: "Deployment: aws",
    image:
      "https://dunhamconnect.com/wp-content/uploads/aws-migration-1200x675.jpg",
    link: "https://aws.amazon.com/",
    description:
      "Amazon web services (aws) provides cloud computing platforms and services. It is the industry standard for deployment.",
  },
  {
    id: "machinelearning",
    title: "ML: OpenCV",
    image: "https://editor.analyticsvidhya.com/uploads/29368python-opencv.png",
    link: "https://opencv.org/",
    description:
      "OpenCV is a programming funciton library focused on real-time computer vision. It allowed us to create an object detection model.",
  },
];

function AboutUsPage() {
  return (
    <div>
      <h1> Goal </h1>

      <p>
        Because of Covid-19, there's been a huge emphasis on in-person
        limitations in bigger settings, such as no more than 50 people in a
        lecture hall. In order to ensure this rule is being followed, it can be
        regulated through counting how many people are in a room. However,
        counting manually can be tedious and even hard. Keeping this in mind,
        our idea plans on making it easier by using a camera to object detect
        the total number of people in the room. We would assume that the camera
        in the room views/covers the entire room and the camera will detect
        solely humans (meaning objects similar looking do not get detected as
        human). This idea would overall make it easier to enforce covid
        guidelines and ensure rules are not being broken.
      </p>
      <p>
        Our project is based mostly around object detection, specifically
        detecting people in a room such as a lecture hall. We want to make a web
        based product that we can link to a stream that can count people live.
        It is important that our project can differentiate between humans and
        other things so that it does not count things such as a person’s
        backpack as another person. The final project should be able to count
        how many people are in a room and give a warning when that number is
        above a certain threshold.
      </p>

      <h1> Tech Stack </h1>
      <ul>
        <TSList items={TECH_STACK} />
      </ul>
      <h1> Team </h1>
      <u1>
        <MemCardList items={TEAM} />
      </u1>
    </div>
  );
}

export default AboutUsPage;
