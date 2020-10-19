require "application_system_test_case"

class MessageBoardsTest < ApplicationSystemTestCase
  setup do
    @message_board = message_boards(:one)
  end

  test "visiting the index" do
    visit message_boards_url
    assert_selector "h1", text: "Message Boards"
  end

  test "creating a Message board" do
    visit message_boards_url
    click_on "New Message Board"

    fill_in "Message", with: @message_board.message_id
    click_on "Create Message board"

    assert_text "Message board was successfully created"
    click_on "Back"
  end

  test "updating a Message board" do
    visit message_boards_url
    click_on "Edit", match: :first

    fill_in "Message", with: @message_board.message_id
    click_on "Update Message board"

    assert_text "Message board was successfully updated"
    click_on "Back"
  end

  test "destroying a Message board" do
    visit message_boards_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Message board was successfully destroyed"
  end
end
