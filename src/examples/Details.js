// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development L.P.

import React, { Component } from 'react';
import { Route } from 'react-router';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Label from 'grommet/components/Label';
import Anchor from 'grommet/components/Anchor';
import CirclePlayIcon from 'grommet/components/icons/base/CirclePlay';
import Quote from 'grommet/components/Quote';
import Image from 'grommet/components/Image';
import Video from 'grommet/components/Video';
import Button from 'grommet/components/Button';
import FormField from 'grommet/components/FormField';
import SocialShare from 'grommet/components/SocialShare';
import Chart, { Area, Axis, Base, Layers } from 'grommet/components/chart/Chart';
import Marquee from '../modules/Marquee';
import Header from './Header';

export default class Details extends Component {
  render () {
    return (
      <div>
        <Header external={true}
          logoLink={'/docs/hpe/examples'}
          links={
            [{
              label: 'Documentation',
              links: [{
                label: 'Accordion',
                href: 'http://grommet.github.io/docs/accordion/'
              }, {
                label: 'Card',
                href: 'http://grommet.github.io/docs/card/'
              }, {
                label: 'Marquee',
                href: '/docs/hpe/develop/marquee'
              }, {
                label: 'Stack',
                href: '/docs/hpe/develop/stack'
              }]
            }, {
              label: 'Page Templates',
              links: [{
                label: 'Primary',
                href: '/docs/hpe/primary'
              }, {
                label: 'Sub',
                href: '/docs/hpe/sub'
              }, {
                label: 'Details',
                href: '/docs/hpe/details'
              }]
            }]
          } />
        <Section pad="none" align="center">
          <Marquee darkTheme justify="start"
            backgroundImage="/docs/img/details_marquee.jpg"
            label="Challenge"
            headline="Lorem ipsum dolor sit amet consectetur elit."
            subHeadline="Pellentesque porta ut augue ac ultricies. Sed vehicula
            metus a vulputate egestas."
            responsiveBackgroundPosition="left"
            separator={true}
          />
          <Box
            direction="row"
            size={{width: 'xxlarge'}}
            pad={{horizontal: 'large'}}
          >
            <Paragraph margin="small">
              By Kirk Bresniker, Hewlett Packard Labs Chief Architect
              and HPE Fellow
            </Paragraph>
          </Box>
        </Section>

        <Section pad="none" align="center">
          <Box
            direction="row"
            justify="center"
            size={{width: 'xxlarge'}}
            pad={{horizontal: 'large', vertical: 'medium', between: 'large'}}
          >
            <Box basis="2/3">
              <Paragraph size="xlarge" margin="none">
                Dolor eveniet possimus possimus aut praesentium dignissimos sit
                debitis. Fugit minima totam provident optio aliquam! Magni tenetur
                doloremque rem tempore amet voluptatibus ipsum. Eos aliquid
                debitis sed mollitia laudantium sit?
              </Paragraph>
              <Paragraph size="large" margin="small">
                Sit architecto veritatis neque ex laboriosam, laboriosam?
                Aliquid illum ullam tenetur molestiae veniam velit quam. Facilis
                ipsam hic labore cupiditate illo soluta error molestias corporis
                quia, ipsa. Nobis ipsa nam eius esse illum unde. Veritatis
                tenetur incidunt consectetur dolore blanditiis.
              </Paragraph>
              <Paragraph size="large" margin="small">
                Lorem dolores incidunt similique aliquid rerum reiciendis est!
                Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
                aut consequatur consequuntur sequi delectus quam qui. Illo odio
                dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
                laboriosam, laborum ratione, dicta nihil culpa.
              </Paragraph>
              <Paragraph size="large" margin="small">
                Dolor amet voluptate nisi molestias praesentium. Eveniet
                consectetur aliquid earum reprehenderit nam dicta tempora!
                Maiores nostrum eius quo odit et facere quaerat maxime beatae
                minus nihil expedita non facere ipsa cupiditate minus velit
                beatae. Assumenda nemo quis ad maxime modi.
              </Paragraph>
            </Box>
            <Box basis="1/3">
              <Image src="/docs/img/Case_Study_image.png" alt="example image" />
              <Box margin={{top: 'medium'}}>
                <Label size="small" uppercase>The Author</Label>
                <Paragraph size="large" margin="none">
                  <strong>Kirk Bresniker</strong>
                </Paragraph>
                <Paragraph margin="medium">
                  Lorem delectus accusantium alias voluptate explicabo? Quaerat
                  eius veniam corrupti laboriosam odio, consectetur, autem
                  aspernatur enim nulla. Animi dolorem ipsum nobis quibusdam
                  possimus quae non quis reprehenderit iusto. Esse mollitia
                  mollitia molestiae illum aspernatur velit odit odit? Consectetur
                  blanditiis omnis.
                </Paragraph>
              </Box>
              <Box
                direction="row"
                justify="between"
                separator="top"
              >
                <Label margin="small" size="small" uppercase={true}>
                  <strong>Share</strong>
                </Label>
                <Box
                  align="center"
                  direction="row"
                  responsive={false}
                  colorIndex="light"
                >
                  <SocialShare
                    type="email"
                    link="http://www.grommet.io/docs/"
                    colorIndex="grey-4"
                  />
                  <SocialShare
                    type="twitter"
                    link="http://www.grommet.io/docs/"
                    colorIndex="grey-4"
                  />
                  <SocialShare
                    type="facebook"
                    link="http://www.grommet.io/docs/"
                    colorIndex="grey-4"
                  />
                  <SocialShare
                    type="linkedin"
                    link="http://www.grommet.io/docs/"
                    colorIndex="grey-4"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Section>

        <Section pad="none" align="center">
          <Box full="horizontal">
            <Image full src="/docs/img/section-1.jpg" />
          </Box>
          <Box
            direction="row"
            size={{width: 'xxlarge'}}
            pad={{horizontal: 'large'}}
          >
            <Paragraph margin="small">
              Photos by Michael Blumenfeld
            </Paragraph>
          </Box>
        </Section>

        <Section align="center">
          <Box
            size={{width: 'xxlarge'}}
            pad={{horizontal: 'large', between: 'large'}}
          >
            <Heading margin="none" strong>Pellentesque porta</Heading>
          </Box>
          <Box
            direction="row"
            justify="center"
            size={{width: 'xxlarge'}}
            pad={{horizontal: 'large', vertical: 'medium', between: 'large'}}
          >
            <Box basis="2/3">
              <Paragraph size="large" margin="small">
                Lorem dolores incidunt similique aliquid rerum reiciendis est!
                Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
                aut consequatur consequuntur sequi delectus quam qui. Illo odio
                dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
                laboriosam, laborum ratione, dicta nihil culpa.
                Dolor eveniet possimus possimus aut praesentium dignissimos sit
                debitis. Fugit minima totam provident optio aliquam! Magni tenetur
                doloremque rem tempore amet voluptatibus ipsum. Eos aliquid
                debitis sed mollitia laudantium sit?
              </Paragraph>
              <Paragraph size="large" margin="small">
                Sit architecto veritatis neque ex laboriosam, laboriosam?
                Aliquid illum ullam tenetur molestiae veniam velit quam. Facilis
                ipsam hic labore cupiditate illo soluta error molestias corporis
                quia, ipsa. Nobis ipsa nam eius esse illum unde. Veritatis
                tenetur incidunt consectetur dolore blanditiis.
              </Paragraph>
              <Paragraph size="large" margin="small">
                Lorem dolores incidunt similique aliquid rerum reiciendis est!
                Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
                aut consequatur consequuntur sequi delectus quam qui. Illo odio
                dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
                laboriosam, laborum ratione, dicta nihil culpa.
              </Paragraph>
              <Paragraph size="large" margin="small">
                Dolor amet voluptate nisi molestias praesentium. Eveniet
                consectetur aliquid earum reprehenderit nam dicta tempora!
                Maiores nostrum eius quo odit et facere quaerat maxime beatae
                minus nihil expedita non facere ipsa cupiditate minus velit
                beatae. Assumenda nemo quis ad maxime modi.
              </Paragraph>
              <Quote
                borderColorIndex="accent-1"
                credit="Cullen Basg, Director at HPE"
                margin={{top: 'medium'}}
                size="full"
              >
                <Paragraph size="xlarge">
                  Quisque eleifned tempor arcu, quis fringilla sem. Pellentesque
                  sed lacus ligula. Eleifend tempor arcu, quis fringilla sem.
                  Pellentesque.
                </Paragraph>
              </Quote>
            </Box>
            <Box basis="1/3">
              <Heading tag="h3" margin="none">The Team</Heading>
              <Paragraph margin="small">
                Pellentesque porta ut augue ac ultricies. Sed vehicula metus a
                vulputate egestas. Lorem delectus accusantium alias voluptate
                explicabo? Quaerat eius veniam corrupti laboriosam odio,
                consectetur, autem aspernatur enim nulla. Animi dolorem ipsum
                nobis quibusdam possimus quae non quis reprehenderit iusto.
                Esse mollitia mollitia molestiae illum aspernatur velit odit.
              </Paragraph>
              <Heading tag="h3" margin="none">Highlights</Heading>
              <Box margin={{vertical: 'small'}}>
                <Image src="/docs/img/Case_Study_image.png" alt="example image" />
                <Paragraph margin="small">
                  Lorem delectus accusantium alias voluptate explicabo? Quaerat
                  eius veniam corrupti laboriosam odio, consectetur, autem
                  aspernatur enim nulla.
                </Paragraph>
                <Box margin={{bottom: 'small'}}>
                  <Anchor href="#" label="Watch the video" icon={<CirclePlayIcon />} />
                </Box>
              </Box>
              <Box margin={{vertical: 'small'}}>
                <Image src="/docs/img/Case_Study_image.png" alt="example image" />
                <Paragraph margin="small">
                  Lorem delectus accusantium alias voluptate explicabo? Quaerat
                  eius veniam corrupti laboriosam odio, consectetur, autem
                  aspernatur enim nulla.
                </Paragraph>
                <Box margin={{bottom: 'small'}}>
                  <Anchor href="#" label="Watch the video" icon={<CirclePlayIcon />} />
                </Box>
              </Box>
              <Heading tag="h3" margin="none">Media Coverage</Heading>
              <Paragraph margin="small">
                <a href="#">The Machine is coming:</a> Star Trek beyond Meets The machine - and
                the Future of Technology Begins.
              </Paragraph>
              <Paragraph margin="small">
                For media enquiries, send an email to <a href="#">corpmediarelations@hpe.com</a>
              </Paragraph>
            </Box>
          </Box>
        </Section>
        <Marquee darkTheme={true}
          backgroundImage="/docs/img/section-5.jpg"
          backgroundOverlayColorIndex="neutral-1"
          headline="Aenean sit amet sollicitudin eros."
          justify="center"
          logo="/docs/img/idc-logo.png"
          subHeadline="Lorem maxime dolorem amet fugit sapiente unde quaerat accusantium ratione itaque laudantium vitae commodi necessitatibus. Soluta ipsa dolores error numquam itaque saepe laborum? Repellendus debitis."
          responsiveBackgroundPosition="left"
          responsiveDropText={false}
          stackSize="large"
          link="http://www.grommet.io/docs/"
        />
        <Section pad="none" align="center" colorIndex="light-2">
          <Box
            size={{width: 'xxlarge'}}
            pad={{horizontal: 'large', vertical: 'medium'}}
          >
            <Heading margin="small" strong>Lorem ipsum dolor</Heading>
            <Paragraph size="large" margin="small">
              Lorem dolores incidunt similique aliquid rerum reiciendis est!
              Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
              aut consequatur consequuntur sequi delectus quam qui. Illo odio
              dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit.
            </Paragraph>
            <Paragraph size="large" margin="small">
              Laboriosam, laborum ratione, dicta nihil culpa.  Dolor eveniet
              possimus possimus aut praesentium dignissimos sit debitis.
              Fugit minima totam provident optio aliquam! Magni tenetur
              doloremque rem tempore amet voluptatibus ipsum. Eos aliquid
              debitis sed mollitia laudantium sit?
            </Paragraph>
          </Box>
          <Box
            align="center"
            direction="row"
            justify="center"
            size={{width: 'xxlarge'}}
            pad={{horizontal: 'large', vertical: 'medium', between: 'large'}}
            margin={{bottom: 'large'}}
          >
            <Box basis="1/3">
              <Quote
                pad="medium"
                borderColorIndex="accent-1"
                credit="Cullen Basg, Director at HPE"
                size="full"
              >
                <Paragraph size="xlarge">
                  Quisque eleifned tempor arcu, quis fringilla sem. Pellentesque
                  sed lacus ligula. Eleifend tempor arcu, quis fringilla sem.
                  Pellentesque.
                </Paragraph>
              </Quote>
            </Box>
            <Box basis="2/3">
              <Paragraph size="large" margin="small">
                Lorem dolores incidunt similique aliquid rerum reiciendis est!
                Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
                aut consequatur consequuntur sequi delectus quam qui. Illo odio
                dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
                laboriosam, laborum ratione, dicta nihil culpa.
                Dolor eveniet possimus possimus aut praesentium dignissimos sit
                debitis. Fugit minima totam provident optio aliquam! Magni tenetur
                doloremque rem tempore amet voluptatibus ipsum. Eos aliquid
                debitis sed mollitia laudantium sit?
              </Paragraph>
              <Paragraph size="large" margin="small">
                Sit architecto veritatis neque ex laboriosam, laboriosam?
                Aliquid illum ullam tenetur molestiae veniam velit quam. Facilis
                ipsam hic labore cupiditate illo soluta error molestias corporis
                quia, ipsa. Nobis ipsa nam eius esse illum unde. Veritatis
                tenetur incidunt consectetur dolore blanditiis.
              </Paragraph>
              <Paragraph size="large" margin="small">
                Lorem dolores incidunt similique aliquid rerum reiciendis est!
                Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
                aut consequatur consequuntur sequi delectus quam qui. Illo odio
                dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
                laboriosam, laborum ratione, dicta nihil culpa.
              </Paragraph>
              <Box pad={{vertical: 'medium'}}>
                <Image
                  full="horizontal"
                  src="/docs/img/details_marquee.jpg"
                  alt="smaple image"
                />
              </Box>
              <Paragraph size="large" margin="small">
                Dolor amet voluptate nisi molestias praesentium. Eveniet
                consectetur aliquid earum reprehenderit nam dicta tempora!
                Maiores nostrum eius quo odit et facere quaerat maxime beatae
                minus nihil expedita non facere ipsa cupiditate minus velit
                beatae. Assumenda nemo quis ad maxime modi.
              </Paragraph>
            </Box>
          </Box>
        </Section>
        <Section pad="none" align="center">
          <Box
            size={{width: 'xxlarge'}}
            pad={{horizontal: 'large', vertical: 'medium'}}
          >
            <Heading margin="small" strong>Aenean sit amet solicitudin eros.</Heading>
            <Paragraph size="large" margin="small">
              Lorem dolores incidunt similique aliquid rerum reiciendis est!
              Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
              aut consequatur consequuntur sequi delectus quam qui. Illo odio
              dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
              laboriosam, laborum ratione, dicta nihil culpa.
              Dolor eveniet possimus possimus aut praesentium dignissimos sit
              debitis. Fugit minima totam provident optio aliquam! Magni tenetur
              doloremque rem tempore amet voluptatibus ipsum. Eos aliquid
              debitis sed mollitia laudantium sit?
            </Paragraph>
            <Paragraph size="large" margin="small">
              Sit architecto veritatis neque ex laboriosam, laboriosam?
              Aliquid illum ullam tenetur molestiae veniam velit quam. Facilis
              ipsam hic labore cupiditate illo soluta error molestias corporis
              quia, ipsa. Nobis ipsa nam eius esse illum unde. Veritatis
              tenetur incidunt consectetur dolore blanditiis.
            </Paragraph>
            <Paragraph size="large" margin="small">
              Lorem dolores incidunt similique aliquid rerum reiciendis est!
              Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
              aut consequatur consequuntur sequi delectus quam qui. Illo odio
              dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
              laboriosam, laborum ratione, dicta nihil culpa.
            </Paragraph>
            <Paragraph size="large" margin="small">
              Dolor amet voluptate nisi molestias praesentium. Eveniet
              consectetur aliquid earum reprehenderit nam dicta tempora!
              Maiores nostrum eius quo odit et facere quaerat maxime beatae
              minus nihil expedita non facere ipsa cupiditate minus velit
              beatae. Assumenda nemo quis ad maxime modi.
            </Paragraph>
          </Box>
        </Section>

        <Box direction="row" justify="between" full="horizontal" pad={{between: 'medium'}}>
          <Box full="horizontal">
            <Image full size="large" src="/docs/img/Case_Study_image.png" alt="example image" />
          </Box>
          <Box full="horizontal">
            <Image full size="large" src="/docs/img/Case_Study_image.png" alt="example image" />
          </Box>
          <Box full="horizontal">
            <Image full size="large" src="/docs/img/Case_Study_image.png" alt="example image" />
          </Box>
        </Box>

        <Section pad="none" align="center">
          <Box
            size={{width: 'xxlarge'}}
            pad={{horizontal: 'large', vertical: 'medium'}}
          >
            <Heading margin="small" strong>Pellentesque porta</Heading>
            <Paragraph size="large" margin="small">
              Lorem dolores incidunt similique aliquid rerum reiciendis est!
              Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
              aut consequatur consequuntur sequi delectus quam qui. Illo odio
              dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
              laboriosam, laborum ratione, dicta nihil culpa.
            </Paragraph>
            <Paragraph size="large" margin="small">
              Dolor eveniet possimus possimus aut praesentium dignissimos sit
              debitis. Fugit minima totam provident optio aliquam! Magni tenetur
              doloremque rem tempore amet voluptatibus ipsum. Eos aliquid
              debitis sed mollitia laudantium sit?
            </Paragraph>
            <Box margin={{top: 'large'}}>
              <Video>
                <source src="/docs/video/test.mp4" type="video/mp4" />
              </Video>
              <Paragraph margin="small">
                Photos by Michael Blumenfeld
              </Paragraph>
            </Box>
            <Paragraph size="large" margin="small">
              Ipsum repudiandae corrupti eos hic libero, nulla facere provident.
              Sequi inventore eveniet minus quaerat aut. Voluptas qui voluptate
              eveniet ea ipsum? Eaque rerum excepturi vitae quis veniam officiis
              amet, id natus quibusdam! Dolorum culpa repellat minima doloribus
              facilis harum. Praesentium ea assumenda veritatis corporis quam
              doloremque.
            </Paragraph>
            <Paragraph size="large" margin="small">
              Lorem dolores incidunt similique aliquid rerum reiciendis est!
              Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
              aut consequatur consequuntur sequi delectus quam qui. Illo odio
              dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
              laboriosam, laborum ratione, dicta nihil culpa.
              Dolor eveniet possimus possimus aut praesentium dignissimos sit
              debitis. Fugit minima totam provident optio aliquam! Magni tenetur
              doloremque rem tempore amet voluptatibus ipsum.
            </Paragraph>
          </Box>
          <Chart vertical={true} full={true}>
            <Base height="small" width="full" />
            <Layers>
              <Area colorIndex="graph-1" values={[100, 95, 80, 82, 75, undefined, 60, 55, 0, 15, 40, 50]} />
              <Area colorIndex="graph-2" values={[50, 40, 15, 0, 55, 60, undefined, 75, 82, 80, 95, 100]} />
            </Layers>
            <Axis ticks={true} count={6} labels={[
              {"index": 0, "label": "May 16"},
              {"index": 1, "label": "May 17"},
              {"index": 2, "label": "May 18"},
              {"index": 3, "label": "May 19"},
              {"index": 4, "label": "May 20"},
              {"index": 5, "label": "May 21"}
            ]} />
          </Chart>
          <Box
            size={{width: 'xxlarge'}}
            pad={{horizontal: 'large', vertical: 'medium'}}
          >
            <Paragraph size="large" margin="small">
              Consectetur quas quia distinctio nam neque commodi asperiores
              incidunt. Dignissimos non vel laboriosam provident veritatis
              nesciunt modi. Sapiente quisquam ab nam assumenda dolor voluptate
              soluta et neque aspernatur nemo omnis adipisci blanditiis aliquam
              illo magni expedita aliquid, odio dolorem molestias eligendi iure
              nulla enim animi? Excepturi veniam in quia quis totam. Nisi aut
              accusantium eos distinctio error.
            </Paragraph>
            <Paragraph size="large" margin="small">
              Lorem dolores incidunt similique aliquid rerum reiciendis est!
              Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
              aut consequatur consequuntur sequi delectus quam qui. Illo odio
              dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
              laboriosam, laborum ratione, dicta nihil culpa.
            </Paragraph>
          </Box>
        </Section>
        <Section
          align="center"
          pad="large"
          colorIndex="accent-2-t"
        >
          <Box
            align="center"
            direction="row"
            size={{width: 'xxlarge'}}
          >
            <Box basis="1/2" pad={{horizontal: 'large'}}>
              <Label uppercase>Share the article</Label>
              <Box direction="row" responsive={false} pad={{between: 'medium'}}>
                <FormField>
                  <input
                    type="text"
                    value="http://www.grommet.io/docs/"
                    readOnly
                  />
                </FormField>
                <Button label="COPY" onClick={() => console.log('hello')} />
              </Box>
              <Box direction="row" margin={{top: 'medium'}} responsive={false}>
                <SocialShare type="email" link="http://www.grommet.io/docs/" />
                <SocialShare type="twitter" link="http://www.grommet.io/docs/" />
                <SocialShare type="facebook" link="http://www.grommet.io/docs/" />
                <SocialShare type="linkedin" link="http://www.grommet.io/docs/" />
              </Box>
            </Box>
            <Card
              contentPad="large"
              basis="1/2"
              direction="row"
              heading="Pellentesque porta ut augue ac ultricies."
              label="Next Article"
              link={<Anchor href="http://www.grommet.io/docs/" primary={true}>
                Learn More</Anchor>}
              separator="left"
            />
          </Box>
        </Section>
      </div>
    );
  }
};

Details.defaultProps = {
};

Details.routes = () => {
  return [
    <Route path="details" component={Details} />
  ];
};
