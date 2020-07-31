import mixTraits from "./mixTraits";
import FeatureInfoTraits from "./FeatureInfoTraits";
import CatalogMemberTraits from "./CatalogMemberTraits";
import primitiveTrait from "./primitiveTrait";
import MappableTraits from "./MappableTraits";
import DataCustodianTraits from "./DataCustodianTraits";
import SplitterTraits from "./SplitterTraits";
import objectTrait from "./objectTrait";
import { StyleTraits } from "./GeoJsonCatalogItemTraits";
import UrlTraits from "./UrlTraits";

export default class SenapsLocationsCatalogItemTraits extends mixTraits(
  FeatureInfoTraits,
  SplitterTraits,
  DataCustodianTraits,
  MappableTraits,
  CatalogMemberTraits,
  UrlTraits
) {
  @primitiveTrait({
    type: "string",
    name: "Location ID Filter",
    description: `
    A string to filter locations using the id field, locations matching the filter will be included,
    multiple filters can be seperated using a comma, eg "*boorowa*,*environdata*"
    `
  })
  locationIdFilter?: string;

  @primitiveTrait({
    type: "string",
    name: "Stream ID Filter",
    description: `
    A string to filter streams using the id field, streams matching the filter will be included,
    multiple filters can be seperated using a comma, eg "*SHT31DIS_ALL*,*environdata*"
    `
  })
  streamIdFilter?: string;

  @objectTrait({
    type: StyleTraits,
    name: "Style",
    description: "Styling rules that follow simplestyle-spec"
  })
  style?: StyleTraits;
}
