import { useForm } from 'react-hook-form'
import React, { ReactElement, useEffect, useState } from "react"
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Tabs, TabList, TabPanels, Tab, TabPanel,
} from '@chakra-ui/react'
import Data from "../Store.json"

export default function HookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()
  const Store = Data.data
  const [BGcolor, setBGcolor] = useState("")
  const [Windowcolor, setWindowcolor] = useState("")
  useEffect(() => {
    Store.map((d:any) => {
      if (document.URL.match(d.id)) {
        // methods.setValue("store", d.store)
        // methods.setValue("tel", d.tel)
        // methods.setValue("sendmail", d.mail)
        // methods.setValue("address", d.address)
        setBGcolor(d.BG_color)
        setWindowcolor(d.Window_color)
      }
    })
  })
  function onSubmit(values:any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        // resolve()
      }, 3000)
    })
  }

  return (
      <Tabs>
  <TabList>
    <Tab>新聞一時休止</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>

  <TabPanels bg={`${BGcolor}`} >
    <TabPanel>
    <form onSubmit={handleSubmit(onSubmit)}>  
    <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor='name'>お名前・会社名（部署名）</FormLabel>
        <Input
          id='name'
          placeholder='name'
          {...register('name', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
    </form>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
     
  )
}