import { expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Provider } from "react-redux"
import store from "../services/store/store"
import Dropdown from "../components/Dropdown"
import { imgDataArray } from "../services/api/data/mockData"

test("user is able to select the first element from the dropdown", async () => {
  const user = userEvent.setup()
  const dropdown = render(
    <Provider store={store}>
      <Dropdown data={imgDataArray} index={0} setImg={() => null} />
    </Provider>,
  )

  await user.selectOptions(
    screen.getByRole("combobox"),
    screen.getByRole("option", { name: "8ko blue" }),
  )

  expect(
    (screen.getByRole("option", { name: "8ko blue" }) as HTMLOptionElement)
      .selected,
  ).toBe(true)
  dropdown.unmount()
})

test("user is able to select the second element from the dropdown", async () => {
  const user = userEvent.setup()
  const dropdown = render(
    <Provider store={store}>
      <Dropdown data={imgDataArray} index={0} setImg={() => null} />
    </Provider>,
  )

  await user.selectOptions(
    screen.getByRole("combobox"),
    screen.getByRole("option", { name: "8ko brown" }),
  )

  expect(
    (screen.getByRole("option", { name: "8ko brown" }) as HTMLOptionElement)
      .selected,
  ).toBe(true)
  dropdown.unmount()
})

test("user is able to select an element from the middle of the dropdown", async () => {
  const user = userEvent.setup()
  const dropdown = render(
    <Provider store={store}>
      <Dropdown data={imgDataArray} index={0} setImg={() => null} />
    </Provider>,
  )

  await user.selectOptions(
    screen.getByRole("combobox"),
    screen.getByRole("option", { name: "8kop rose" }),
  )

  expect(
    (screen.getByRole("option", { name: "8kop rose" }) as HTMLOptionElement)
      .selected,
  ).toBe(true)
  dropdown.unmount()
})

test("user is able to select the last element from the dropdown", async () => {
  const user = userEvent.setup()
  const dropdown = render(
    <Provider store={store}>
      <Dropdown data={imgDataArray} index={0} setImg={() => null} />
    </Provider>,
  )

  await user.selectOptions(
    screen.getByRole("combobox"),
    screen.getByRole("option", { name: "4kop smoke" }),
  )

  expect(
    (screen.getByRole("option", { name: "4kop smoke" }) as HTMLOptionElement)
      .selected,
  ).toBe(true)
  dropdown.unmount()
})
