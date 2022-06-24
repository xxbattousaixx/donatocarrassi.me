import React from "react";
import Carousel from "react-material-ui-carousel";
import autoBind from "auto-bind";
import "./styles.css";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button
} from "@material-ui/core";

function Banner(props) {
  if (props.newProp) console.log(props.newProp);
  const contentPosition = props.contentPosition
    ? props.contentPosition
    : "left";
  const totalItems = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
    <Grid item xs={12 / totalItems} key="content">
      <CardContent className="Content">
        <Typography className="Title">{props.item.Name}</Typography>

        <Typography className="Caption">{props.item.Caption}</Typography>

        <Button href='/contact-us' variant="outlined" className="ViewButton">
          View Now
        </Button>
      </CardContent>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={12 / totalItems} key={item.Name}>
        <CardMedia className="Media" image={item.Image} title={item.Name}>
          <Typography className="MediaCaption">{item.Name}</Typography>
        </CardMedia>
      </Grid>
    );

    items.push(media);
  }

  if (contentPosition === "left") {
    items.unshift(content);
  } else if (contentPosition === "right") {
    items.push(content);
  } else if (contentPosition === "middle") {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  );
}

const items = [
  {
    Name: "Copier & Printer Services",
    Caption: "Every major brand",

    contentPosition: "left",
    Items: [
      {
        Name: "Repairs and Service",
        Image: "https://www.paylesscartridge.ca/wp-content/uploads/2019/05/2.jpg"
      },
      {
        Name: "Sales",
        Image: "https://media.istockphoto.com/photos/close-up-photo-of-futuristic-3d-printer-micro-and-nano-electronics-b-picture-id1127365762?k=6&m=1127365762&s=170667a&w=0&h=jd_91j2797Bo68ZdsU6S0LWdYxvkrMn-bvi7uJpq9eA="
      }
    ]
  },
  {
    Name: "Enterprise Level Services",
    Caption: "Innovative Solutions",

    contentPosition: "middle",
    Items: [
      {
        Name: "Document Management",
        Image: "https://documentessentials.com/wp-content/uploads/2019/02/shutterstock_296805227-300x195.jpg"
      },
      {
        Name: "Print Management",
        Image: "https://documentessentials.com/wp-content/uploads/2019/04/print-management-300x278.jpg"
      }
    ]
  },
  {
    Name: "Industry Know-how",
    Caption: "Get current information",
    contentPosition: "right",
    Items: [
      {
        Name: "Docuware Product News Blog",
        Image: "https://th.bing.com/th/id/R.90400f50266f6b0dd40ff06e5bef26b4?rik=R2WAF7wwPFOYvw&riu=http%3a%2f%2fwww.aaabm.com%2fwp-content%2fuploads%2f2016%2f04%2fDocuWareLogo.png&ehk=kbBAZsUBo7lBW9gnqMdl6WuvI%2f4l9gVpxFhz%2fpl0r1A%3d&risl=&pid=ImgRaw&r=0"
      },
      {
        Name: "Our Blog",
        Image: "https://th.bing.com/th/id/OIP.AZdMRdxYgR6K8-gLzN9IPgHaE7?pid=ImgDet&w=800&h=533&rs=1"
      }
    ]
  }
];

class BannerExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: true,
      animation: "fade",
      indicators: true,
      timeout: 500,
      navButtonsAlwaysVisible: false,
      navButtonsAlwaysInvisible: false,
      cycleNavigation: true
    };

    autoBind(this);
  }

  toggleAutoPlay() {
    this.setState({
      autoPlay: !this.state.autoPlay
    });
  }

  toggleIndicators() {
    this.setState({
      indicators: !this.state.indicators
    });
  }

  toggleNavButtonsAlwaysVisible() {
    this.setState({
      navButtonsAlwaysVisible: !this.state.navButtonsAlwaysVisible
    });
  }

  toggleNavButtonsAlwaysInvisible() {
    this.setState({
      navButtonsAlwaysInvisible: !this.state.navButtonsAlwaysInvisible
    });
  }

  toggleCycleNavigation() {
    this.setState({
      cycleNavigation: !this.state.cycleNavigation
    });
  }

  changeAnimation(event) {
    this.setState({
      animation: event.target.value
    });
  }

  changeTimeout(event, value) {
    this.setState({
      timeout: value
    });
  }

  render() {
    return (
      <div style={{ marginTop: "50px", color: "#494949" }}>
        <Carousel
          className="Example"
          autoPlay={this.state.autoPlay}
          animation={this.state.animation}
          indicators={this.state.indicators}
          timeout={this.state.timeout}
          cycleNavigation={this.state.cycleNavigation}
          navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
          navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
          next={(now, previous) =>
            console.log(
              `Next User Callback: Now displaying child${now}. Previously displayed child${previous}`
            )
          }
          prev={(now, previous) =>
            console.log(
              `Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`
            )
          }
          onChange={(now, previous) =>
            console.log(
              `OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`
            )
          }
          // fullHeightHover={false}
          // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
          // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
          // indicatorContainerProps={{style: {margin: "20px"}}}
          // NextIcon='next'
        >
          {items.map((item, index) => {
            return (
              <Banner
                item={item}
                key={index}
                contentPosition={item.contentPosition}
              />
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default BannerExample;
