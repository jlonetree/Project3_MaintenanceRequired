require "application_system_test_case"

class MainScreensTest < ApplicationSystemTestCase
  setup do
    @main_screen = main_screens(:one)
  end

  test "visiting the index" do
    visit main_screens_url
    assert_selector "h1", text: "Main Screens"
  end

  test "creating a Main screen" do
    visit main_screens_url
    click_on "New Main Screen"

    click_on "Create Main screen"

    assert_text "Main screen was successfully created"
    click_on "Back"
  end

  test "updating a Main screen" do
    visit main_screens_url
    click_on "Edit", match: :first

    click_on "Update Main screen"

    assert_text "Main screen was successfully updated"
    click_on "Back"
  end

  test "destroying a Main screen" do
    visit main_screens_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Main screen was successfully destroyed"
  end
end
