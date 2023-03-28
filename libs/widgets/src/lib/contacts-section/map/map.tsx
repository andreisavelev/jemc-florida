import {useMemo} from "react";
import styled from 'styled-components';
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import {PlaceholderSize} from "react-bootstrap/usePlaceholder";
import {Libraries} from "@react-google-maps/api/dist/utils/make-load-script-url";

/* eslint-disable-next-line */
export interface MapProps {}

const StyledMap = styled.div`
  > div {
    border-radius: var(--bs-border-radius);
  }
`;


export function Map(props: MapProps) {
  const places = useMemo<Libraries>(() => ['places'], []);
  const mapCenter = useMemo(
    () => ({ lat: 27.0833735, lng: -82.4349217 }),
    []
  );
  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
      zoomControl: true,
    }),
    []
  );
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB4To8ez-05YaJVs0PtlUdhdt--UsP1O8g",
    libraries: places,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <StyledMap>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: '100%', height: '365px' }}
      >
        <Marker position={mapCenter} title="title" />
      </GoogleMap>
    </StyledMap>
  );
}

export default Map;
