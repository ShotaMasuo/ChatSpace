Rails.application.routes.draw do
  devise_for :users
  resources :users, only:[:edit, :update]
  resources :groups, only:[:index, :new, :create, :edit, :update] do
    resources :chats, only:[:index, :create]
  end
  root "groups#index"
end
