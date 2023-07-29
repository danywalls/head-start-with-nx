import { Meta } from '@storybook/angular';
import { NavigationComponent } from './navigation.component';

export default {
  title: 'NavigationComponent',
  component: NavigationComponent,
} as Meta<NavigationComponent>;

export const Primary = {
  render: (args: NavigationComponent) => ({
    props: args,
  }),
  args: {
    navOptions: ['home', 'about'],
  },
};
