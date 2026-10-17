import React from 'react';
import { Button, Container, Section, Heading, Text, Grid } from './UI';

const ComponentsShowcase = () => {
  return (
    <div>
      {/* Buttons */}
      <Section padding="lg" id="buttons">
        <Container size="lg">
          <Heading level={2} color="primary">
            Buttons
          </Heading>
          <Grid cols={3} gap="md">
            <div>
              <Text color="tertiary" size="sm">Primary - Large</Text>
              <Button variant="primary" size="lg">Button</Button>
            </div>
            <div>
              <Text color="tertiary" size="sm">Secondary - Medium</Text>
              <Button variant="secondary" size="md">Button</Button>
            </div>
            <div>
              <Text color="tertiary" size="sm">Ghost - Small</Text>
              <Button variant="ghost" size="sm">Button</Button>
            </div>
            <div>
              <Text color="tertiary" size="sm">Primary Disabled</Text>
              <Button variant="primary" disabled>Button</Button>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Text */}
      <Section padding="lg" id="text">
        <Container size="lg">
          <Heading level={2} color="primary">
            Text Components
          </Heading>
          <Grid cols={2} gap="md">
            <div>
              <Text variant="subtitle" color="tertiary" size="sm">Body - Primary</Text>
              <Text variant="body" color="primary" size="md">
                Это текст для основного контента. Используется для описаний и абзацев.
              </Text>
            </div>
            <div>
              <Text variant="subtitle" color="tertiary" size="sm">Body - Secondary</Text>
              <Text variant="body" color="secondary" size="md">
                Это текст вторичного содержания. Используется для дополнительной информации.
              </Text>
            </div>
            <div>
              <Text variant="caption" color="tertiary" size="sm">Caption - Small</Text>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Headings */}
      <Section padding="lg" id="headings">
        <Container size="lg">
          <Heading level={2} color="primary">
            Heading Components
          </Heading>
          <Grid cols={1} gap="md">
            <div>
              <Heading level={1} color="primary">Heading 1</Heading>
            </div>
            <div>
              <Heading level={2} color="primary">Heading 2</Heading>
            </div>
            <div>
              <Heading level={3} color="primary">Heading 3</Heading>
            </div>
            <div>
              <Heading level={4} color="secondary">Heading 4 - Secondary</Heading>
            </div>
          </Grid>
        </Container>
      </Section>
    </div>
  );
};

export default ComponentsShowcase;
