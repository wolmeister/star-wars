import React, { useState } from 'react';
import romans from 'romans';

import CharactersDetails from '~/components/CharactersDetails';
import FilmDetails from '~/components/FilmDetails';
import VehiclesDetails from '~/components/VehiclesDetails';
import StarshipsDetails from '~/components/StarshipsDetails';
import PlanetsDetails from '~/components/PlanetsDetails';
import SpeciesDetails from '~/components/SpeciesDetails';
import {
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabIcon,
  TabText,
} from '~/components/Tabs';
import { FilmDetailsProps } from './types';
import { StyledFilmContent, FilmTitle } from './styles';

import lightsabersIcon from '~/assets/lightsabers.png';
import starshipsIcon from '~/assets/starships.png';
import speciesIcon from '~/assets/species.png';
import planetsIcon from '~/assets/planets.png';
import charactersIcon from '~/assets/characters.png';
import vehiclesIcon from '~/assets/vehicles.png';

export default function FilmContent({ film }: FilmDetailsProps) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <StyledFilmContent>
      <FilmTitle>
        {`Episode ${romans.romanize(film.episode_id)} - ${film.title}`}
      </FilmTitle>

      <Tabs selectedIndex={tabIndex} onSelect={setTabIndex}>
        <TabList>
          <Tab>
            <TabIcon src={lightsabersIcon} current={tabIndex === 0} />
            <TabText current={tabIndex === 0}>About</TabText>
          </Tab>
          <Tab>
            <TabIcon src={charactersIcon} current={tabIndex === 1} />
            <TabText current={tabIndex === 1}>Characters</TabText>
          </Tab>
          <Tab>
            <TabIcon src={planetsIcon} current={tabIndex === 2} />
            <TabText current={tabIndex === 2}>Planets</TabText>
          </Tab>
          <Tab>
            <TabIcon src={speciesIcon} current={tabIndex === 3} />
            <TabText current={tabIndex === 3}>Species</TabText>
          </Tab>
          <Tab>
            <TabIcon src={starshipsIcon} current={tabIndex === 4} />
            <TabText current={tabIndex === 4}>Starships</TabText>
          </Tab>
          <Tab>
            <TabIcon src={vehiclesIcon} current={tabIndex === 5} />
            <TabText current={tabIndex === 5}>Vehicles</TabText>
          </Tab>
        </TabList>

        <TabPanel>
          <FilmDetails film={film} />
        </TabPanel>
        <TabPanel>
          <CharactersDetails film={film} />
        </TabPanel>
        <TabPanel>
          <PlanetsDetails film={film} />
        </TabPanel>
        <TabPanel>
          <SpeciesDetails film={film} />
        </TabPanel>
        <TabPanel>
          <StarshipsDetails film={film} />
        </TabPanel>
        <TabPanel>
          <VehiclesDetails film={film} />
        </TabPanel>
      </Tabs>
    </StyledFilmContent>
  );
}
