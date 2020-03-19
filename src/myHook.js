import { useState } from 'react';

export default function useCustomHook(initState) {
  console.log(initState);
  return useState(initState);
}
