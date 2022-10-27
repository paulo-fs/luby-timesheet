import { useState, Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'

import arrowUp from '@/shared/assets/icons/ArrowUp2.svg'
import arrowDown from '@/shared/assets/icons/ArrowDown2.svg'
import { SelectLabel, StyledCombobox, StyledList } from './styles'

const clients = [
   { id: 1, name: 'Incubadora JS' },
   { id: 2, name: 'Incubadora C#' },
   { id: 3, name: 'Multi' },
   { id: 4, name: 'Banco X' },
 ]

export default function Select() {
   const [selectedClient, setSelectedClient] = useState(clients[0])
  const [query, setQuery] = useState('')

  const filteredClients = query === ''
    ? clients
    : clients.filter(client => (
        client.name.toLowerCase().replace(/\s+/g, '')
        .includes(query.toLowerCase().replace(/\s+/g, ''))
    ))

  return (
   <Combobox as={StyledCombobox} value={selectedClient} onChange={setSelectedClient}>
      <SelectLabel>
         <Combobox.Input 
            displayValue={(client: typeof clients[0]) => client.name} 
            onChange={event => setQuery(event.target.value)} 
         />
         <Combobox.Button>
            <img src={arrowDown} alt="selecione um cliente" />
         </Combobox.Button>
      </SelectLabel>
      <Transition
      as={Fragment} leave='transition ease-in duration-100'
      leaveFrom='opacity-100' leaveTo='opacity-0'
      afterLeave={() => setQuery('')}
      >
      <StyledList>
         {
         filteredClients.length === 0 && query !== '' 
         ? ( <div>nothing fould</div> ) 
         : ( 
            filteredClients.map(client => (
               <Combobox.Option key={client.id} value={client}>
                  <span>{client.name}</span>
               </Combobox.Option>
            ))
            )
      }
      </StyledList>
      </Transition>
   </Combobox>
  )
}
