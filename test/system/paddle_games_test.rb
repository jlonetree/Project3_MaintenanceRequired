require "application_system_test_case"

class PaddleGamesTest < ApplicationSystemTestCase
  setup do
    @paddle_game = paddle_games(:one)
  end

  test "visiting the index" do
    visit paddle_games_url
    assert_selector "h1", text: "Paddle Games"
  end

  test "creating a Paddle game" do
    visit paddle_games_url
    click_on "New Paddle Game"

    click_on "Create Paddle game"

    assert_text "Paddle game was successfully created"
    click_on "Back"
  end

  test "updating a Paddle game" do
    visit paddle_games_url
    click_on "Edit", match: :first

    click_on "Update Paddle game"

    assert_text "Paddle game was successfully updated"
    click_on "Back"
  end

  test "destroying a Paddle game" do
    visit paddle_games_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Paddle game was successfully destroyed"
  end
end
