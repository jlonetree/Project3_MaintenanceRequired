require "application_system_test_case"

class ScoreBoardsTest < ApplicationSystemTestCase
  setup do
    @score_board = score_boards(:one)
  end

  test "visiting the index" do
    visit score_boards_url
    assert_selector "h1", text: "Score Boards"
  end

  test "creating a Score board" do
    visit score_boards_url
    click_on "New Score Board"

    fill_in "Score", with: @score_board.score_id
    fill_in "User", with: @score_board.user_id
    click_on "Create Score board"

    assert_text "Score board was successfully created"
    click_on "Back"
  end

  test "updating a Score board" do
    visit score_boards_url
    click_on "Edit", match: :first

    fill_in "Score", with: @score_board.score_id
    fill_in "User", with: @score_board.user_id
    click_on "Update Score board"

    assert_text "Score board was successfully updated"
    click_on "Back"
  end

  test "destroying a Score board" do
    visit score_boards_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Score board was successfully destroyed"
  end
end
