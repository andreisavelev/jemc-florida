import {useMemo} from "react";
import styled from 'styled-components';
import { useLoadScript, GoogleMap } from '@react-google-maps/api';

/* eslint-disable-next-line */
export interface MapProps {}

const StyledMap = styled.div`
  > div {
    border-radius: var(--bs-border-radius);
  }
`;

export function Map(props: MapProps) {
  const places = useMemo(() => ['places'], []);
  const mapCenter = useMemo(
    () => ({ lat: 27.044224, lng: -82.2359254 }),
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
    libraries: places as any,
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
        />
    </StyledMap>
  );
}

export default Map;
