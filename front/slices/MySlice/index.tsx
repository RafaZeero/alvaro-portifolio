import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `MySlice`.
 */
export type MySliceProps = SliceComponentProps<Content.MySliceSlice>;

/**
 * Component for "MySlice" Slices.
 */
const MySlice = ({ slice }: MySliceProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for my_slice (variation: {slice.variation}) Slices
    </section>
  );
};

export default MySlice;
