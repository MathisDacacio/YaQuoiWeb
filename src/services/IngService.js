import { supabase } from '../config/supabaseClient'

/**
 * Récupère tous les ingrédients de la table "Ingredient"
 * @returns {Promise<Array>} Liste de tous les ingrédients
 */
export const getAllIngredients = async () => {
  try {
    const { data, error } = await supabase
      .from('Ingredient')
      .select('*')

    if (error) {
      console.error('Erreur lors de la récupération des ingrédients:', error.message)
      throw error
    }

    return data || []
  } catch (error) {
    console.error('Erreur dans getAllIngredients:', error)
    throw error
  }
}

/**
 * Récupère un ingrédient par son ID
 * @param {number} id - ID de l'ingrédient à récupérer
 * @returns {Promise<Object>} L'ingrédient correspondant à l'ID
 */
export const getIngredientById = async (id) => {
  try {
    const { data, error } = await supabase
      .from('Ingredient')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      console.error('Erreur lors de la récupération de l\'ingrédient:', error.message)
      throw error
    }

    return data || null
  } catch (error) {
    console.error('Erreur dans getIngredientById:', error)
    throw error
  }
}