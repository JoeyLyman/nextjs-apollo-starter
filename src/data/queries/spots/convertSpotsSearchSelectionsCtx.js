// We store Spots Search Selections differently on context than how they are sent to the GQL endpoint for get spots
// For context, they are like this:
// [
//   {
//     _id: ...,
//     type: ...,
//     name: ...,
//     value: ...,
//   }
// ]

// For GQL, they are like this:

// {
//   spots: [ID],
//   categories: [ID],
//   boundingBoxes: [[[Float]]]   coordinates => group of coordinates forming box => array of multiple boxes
// }

import { SPOT_SEARCH_TYPES } from "../../../context/search/search/context";

export default function convertSpotsSearchSelectionsToGQLInput(
  spotsSearchSelectionsCtx
) {
  const boundingBoxesInContext = spotsSearchSelectionsCtx
    .filter(
      (item) => item.type === SPOT_SEARCH_TYPES.BOUNDING_BOX_GEOCODER_RESULT
    )
    .map((spotSelection) => spotSelection.value.bbox);
  const boundingBoxes =
    boundingBoxesInContext.length > 0 ? boundingBoxesInContext : [[]];

  return {
    spots: spotsSearchSelectionsCtx
      .filter((item) => item.type === SPOT_SEARCH_TYPES.SPOT)
      .map((spotSelection) => spotSelection.value._id),
    categories: spotsSearchSelectionsCtx
      .filter((item) => item.type === SPOT_SEARCH_TYPES.CATEGORY)
      .map((spotSelection) => spotSelection._id),
    boundingBoxes,
  };
}
