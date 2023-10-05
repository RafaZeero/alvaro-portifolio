'use client';

import { SliceSimulator } from '@slicemachine/adapter-next/simulator';
import { SliceZone } from '@prismicio/react';

// import { components } from "../../slices";
import * as components from '@components';

export default function SliceSimulatorPage() {
  return <SliceSimulator sliceZone={props => <SliceZone {...props} components={components} />} />;
}
