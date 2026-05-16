import { supabase } from '../config/supabaseClient'

/**
 * Ajoute un ingrédient au panier de l'utilisateur
 * @param {string} userId - ID de l'utilisateur
 * @param {string} ingredientId - ID de l'ingrédient
 * @returns {Promise<Object>} Objet inséré dans la table Panier
 */
export const addIngredientToCart = async (userId, ingredientId) => {
  try {
    const { data, error } = await supabase
      .from('Panier')
      .insert([
        {
          userId: userId,
          ingredientId: ingredientId,
          dateAdded: new Date().toISOString(),
        }
      ])
      .select()

    if (error) {
      console.error('Erreur lors de l\'ajout au panier:', error.message)
      throw error
    }

    return data
  } catch (error) {
    console.error('Erreur dans addIngredientToCart:', error)
    throw error
  }
}

/**
 * Ajoute plusieurs ingrédients au panier
 * @param {string} userId - ID de l'utilisateur
 * @param {Array<string>} ingredientIds - Liste des IDs des ingrédients
 * @returns {Promise<Array>} Liste des objets insérés
 */
export const addMultipleIngredientsToCart = async (userId, ingredientIds) => {
  try {
    if (!ingredientIds || ingredientIds.length === 0) {
      throw new Error('Aucun ingrédient sélectionné')
    }

    const itemsToInsert = ingredientIds.map(ingredientId => ({
      userId: userId,
      ingredientId: ingredientId,
      dateAdded: new Date().toISOString(),
    }))

    const { data, error } = await supabase
      .from('Panier')
      .insert(itemsToInsert)
      .select()

    if (error) {
      console.error('Erreur lors de l\'ajout des ingrédients:', error.message)
      throw error
    }

    return data || []
  } catch (error) {
    console.error('Erreur dans addMultipleIngredientsToCart:', error)
    throw error
  }
}

/**
 * Récupère le panier de l'utilisateur
 * @param {string} userId - ID de l'utilisateur
 * @returns {Promise<Array>} Liste des ingrédients du panier
 */
export const getUserCart = async (userId) => {
  try {
    const { data, error } = await supabase
      .from('Panier')
      .select('*')
      .eq('userId', userId)

    if (error) {
      console.error('Erreur lors de la récupération du panier:', error.message)
      throw error
    }

    return data || []
  } catch (error) {
    console.error('Erreur dans getUserCart:', error)
    throw error
  }
}

/**
 * Vide le panier de l'utilisateur
 * @param {string} userId - ID de l'utilisateur
 * @returns {Promise<void>}
 */
export const clearUserCart = async (userId) => {
  try {
    const { error } = await supabase
      .from('Panier')
      .delete()
      .eq('userId', userId)

    if (error) {
      console.error('Erreur lors de la suppression du panier:', error.message)
      throw error
    }
  } catch (error) {
    console.error('Erreur dans clearUserCart:', error)
    throw error
  }
}
